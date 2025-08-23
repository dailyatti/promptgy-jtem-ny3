// Enhanced Sports Betting Prompt Library with AI Integration
// Professional PhD-level implementation with multi-provider AI support

// AI Configuration and Management
class AIManager {
    constructor() {
        this.providers = {
            deepseek: {
                name: 'DeepSeek',
                endpoint: 'https://api.deepseek.com/chat/completions',
                models: ['deepseek-chat', 'deepseek-reasoner']
            },
            perplexity: {
                name: 'Perplexity Sonar Pro',
                endpoint: 'https://api.perplexity.ai/chat/completions',
                models: ['sonar-pro']
            },
            chatgpt: {
                name: 'ChatGPT-5 High',
                endpoint: 'https://api.openai.com/v1/chat/completions',
                models: ['gpt-5', 'gpt-5-mini', 'gpt-5-nano']
            }
        };
        this.currentProvider = null;
        this.apiKey = null;
        this.loadConfig();
    }

    loadConfig() {
        // Note: API keys are NOT stored in localStorage for security
        const savedProvider = localStorage.getItem('ai_provider');
        if (savedProvider) {
            this.currentProvider = savedProvider;
            document.getElementById('ai-provider').value = savedProvider;
        }
    }

    saveConfig() {
        if (this.currentProvider) {
            localStorage.setItem('ai_provider', this.currentProvider);
        }
    }

    setProvider(provider) {
        this.currentProvider = provider;
        this.saveConfig();
    }

    setApiKey(apiKey) {
        this.apiKey = apiKey;
        // API keys are stored only in memory for security
        this.updateGenerateButton();
    }

    async testConnection() {
        if (!this.currentProvider || !this.apiKey) {
            throw new Error('Please select a provider and enter API key');
        }

        const provider = this.providers[this.currentProvider];
        const testMessage = "Test connection - respond with 'OK' if working";

        try {
            const response = await this.makeRequest(testMessage, 'system');
            return response.includes('OK') || response.length > 0;
        } catch (error) {
            console.error('Connection test failed:', error);
            return false;
        }
    }

    async makeRequest(userMessage, role = 'user', systemPrompt = null) {
        if (!this.currentProvider || !this.apiKey) {
            throw new Error('AI provider not configured');
        }

        const provider = this.providers[this.currentProvider];
        const messages = [];

        if (systemPrompt) {
            messages.push({ role: 'system', content: systemPrompt });
        }

        messages.push({ role: role, content: userMessage });

        const requestBody = {
            model: provider.models[0],
            messages: messages,
            max_tokens: 2048,
            temperature: 0.7
        };

        // Add provider-specific parameters
        if (this.currentProvider === 'perplexity') {
            requestBody.return_citations = true;
            requestBody.search_recency_filter = 'month';
        }

        const response = await fetch(provider.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Request failed'}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    updateGenerateButton() {
        const generateBtn = document.getElementById('generate-tips');
        const hasConfig = this.currentProvider && this.apiKey;
        const hasImages = document.getElementById('uploaded-images').children.length > 0;
        
        generateBtn.disabled = !hasConfig;
        generateBtn.textContent = hasConfig ? 'Generate Tips' : 'Configure AI First';
    }
}

// Image Processing and Analysis
class ImageAnalyzer {
    constructor() {
        this.uploadedImages = [];
        this.setupDragAndDrop();
    }

    setupDragAndDrop() {
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');

        dropZone.addEventListener('click', () => fileInput.click());
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-blue-500', 'bg-blue-50');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-blue-500', 'bg-blue-50');
            this.handleFiles(e.dataTransfer.files);
        });

        fileInput.addEventListener('change', (e) => {
            this.handleFiles(e.target.files);
        });
    }

    async handleFiles(files) {
        for (let file of files) {
            if (file.type.startsWith('image/')) {
                await this.processImage(file);
            }
        }
        aiManager.updateGenerateButton();
    }

    async processImage(file) {
        const reader = new FileReader();
        
        return new Promise((resolve) => {
            reader.onload = (e) => {
                const imageData = {
                    name: file.name,
                    data: e.target.result,
                    size: file.size,
                    type: file.type
                };
                
                this.uploadedImages.push(imageData);
                this.displayImage(imageData);
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    displayImage(imageData) {
        const container = document.getElementById('uploaded-images');
        const imageElement = document.createElement('div');
        imageElement.className = 'flex items-center justify-between bg-slate-700 rounded-lg p-3';
        imageElement.innerHTML = `
            <div class="flex items-center space-x-3">
                <img src="${imageData.data}" alt="${imageData.name}" class="w-12 h-12 object-cover rounded">
                <div>
                    <p class="text-sm font-medium text-white">${imageData.name}</p>
                    <p class="text-xs text-slate-400">${(imageData.size / 1024).toFixed(1)} KB</p>
                </div>
            </div>
            <button class="text-red-400 hover:text-red-300" onclick="imageAnalyzer.removeImage('${imageData.name}')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        `;
        container.appendChild(imageElement);
    }

    removeImage(imageName) {
        this.uploadedImages = this.uploadedImages.filter(img => img.name !== imageName);
        const container = document.getElementById('uploaded-images');
        container.innerHTML = '';
        this.uploadedImages.forEach(img => this.displayImage(img));
        aiManager.updateGenerateButton();
    }

    getImageDescriptions() {
        return this.uploadedImages.map(img => `Image: ${img.name}`).join(', ');
    }
}

// Professional Tips Generator
class TipsGenerator {
    constructor(aiManager, imageAnalyzer) {
        this.aiManager = aiManager;
        this.imageAnalyzer = imageAnalyzer;
        this.currentTips = [];
    }

    async generateTips(selectedSport, customPrompt) {
        const container = document.getElementById('ai-tips-container');
        container.innerHTML = '<div class="text-center py-8"><div class="animate-pulse">🤖 Generating professional betting tips...</div></div>';

        try {
            const systemPrompt = this.buildSystemPrompt(selectedSport);
            const userPrompt = this.buildUserPrompt(selectedSport, customPrompt);
            
            const response = await this.aiManager.makeRequest(userPrompt, 'user', systemPrompt);
            const tips = this.parseResponse(response);
            
            this.currentTips = tips;
            this.displayTips(tips);
            
        } catch (error) {
            console.error('Tips generation failed:', error);
            container.innerHTML = `
                <div class="text-red-400 text-center py-8">
                    <p class="font-semibold">❌ Failed to generate tips</p>
                    <p class="text-sm mt-2">${error.message}</p>
                </div>
            `;
        }
    }

    buildSystemPrompt(sport) {
        return `You are a PhD-level sports betting analyst specializing in ${sport}. 
        You provide professional, data-driven betting insights with:
        - Expected Value (EV) calculations
        - Odds analysis and line movement
        - Statistical modeling insights
        - Risk assessment and bankroll management
        - Market inefficiency identification
        
        Format your response as a structured betting analysis with clear sections:
        1. Match Analysis
        2. Value Bets (with EV percentages)
        3. Risk Assessment
        4. Recommended Stakes
        5. Key Statistics
        
        Always include specific odds recommendations and confidence levels.
        Be precise, analytical, and professional in your analysis.`;
    }

    buildUserPrompt(sport, customPrompt) {
        let prompt = `Analyze the following ${sport} betting opportunity:\n\n${customPrompt}\n\n`;
        
        // Add specific match details if available
        const specificMatch = document.getElementById('specific-match-input').value;
        const specificDate = document.getElementById('specific-date-input').value;
        
        if (specificMatch) {
            prompt += `Match: ${specificMatch}\n`;
        }
        
        if (specificDate) {
            prompt += `Date: ${specificDate}\n`;
        }

        // Add image context if available
        if (this.imageAnalyzer.uploadedImages.length > 0) {
            prompt += `\nAdditional context from uploaded images: ${this.imageAnalyzer.getImageDescriptions()}\n`;
        }

        prompt += `\nProvide a comprehensive betting analysis with specific recommendations.`;
        
        return prompt;
    }

    parseResponse(response) {
        // Parse the AI response into structured tips
        const lines = response.split('\n').filter(line => line.trim());
        const tips = [];
        let currentTip = null;

        for (const line of lines) {
            // Look for betting recommendations
            if (line.includes('Value Bet') || line.includes('Recommendation') || 
                line.includes('EV:') || line.includes('Odds:')) {
                
                if (currentTip) {
                    tips.push(currentTip);
                }
                
                currentTip = {
                    type: this.extractTipType(line),
                    description: line,
                    confidence: this.extractConfidence(line),
                    ev: this.extractEV(line),
                    stake: this.extractStake(line),
                    odds: this.extractOdds(line)
                };
            } else if (currentTip && line.trim()) {
                currentTip.description += `\n${line}`;
            }
        }

        if (currentTip) {
            tips.push(currentTip);
        }

        // If no structured tips found, create a general analysis tip
        if (tips.length === 0) {
            tips.push({
                type: 'Analysis',
                description: response,
                confidence: 'Medium',
                ev: 'N/A',
                stake: 'Standard',
                odds: 'Various'
            });
        }

        return tips;
    }

    extractTipType(text) {
        if (text.toLowerCase().includes('value')) return 'Value Bet';
        if (text.toLowerCase().includes('over')) return 'Over Bet';
        if (text.toLowerCase().includes('under')) return 'Under Bet';
        if (text.toLowerCase().includes('spread')) return 'Spread Bet';
        if (text.toLowerCase().includes('moneyline')) return 'Moneyline';
        return 'General';
    }

    extractConfidence(text) {
        if (text.includes('high confidence') || text.includes('very confident')) return 'High';
        if (text.includes('low confidence') || text.includes('uncertain')) return 'Low';
        return 'Medium';
    }

    extractEV(text) {
        const evMatch = text.match(/EV[:\s]+([+-]?\d+\.?\d*%?)/i);
        return evMatch ? evMatch[1] : 'N/A';
    }

    extractStake(text) {
        const stakeMatch = text.match(/stake[:\s]+(\d+\.?\d*[%u]?)/i);
        return stakeMatch ? stakeMatch[1] : '1-2% bankroll';
    }

    extractOdds(text) {
        const oddsMatch = text.match(/odds?[:\s]+([+-]?\d+\.?\d*)/i);
        return oddsMatch ? oddsMatch[1] : 'N/A';
    }

    displayTips(tips) {
        const container = document.getElementById('ai-tips-container');
        
        if (tips.length === 0) {
            container.innerHTML = '<p class="text-slate-400 text-center py-8">No tips generated. Please try again.</p>';
            return;
        }

        const tipsHTML = tips.map((tip, index) => `
            <div class="tip-card rounded-xl p-6 border transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <span class="tip-type-badge px-3 py-1 rounded-full text-xs font-semibold">
                            ${tip.type}
                        </span>
                        <span class="confidence-badge confidence-${tip.confidence.toLowerCase()} px-2 py-1 rounded text-xs">
                            ${tip.confidence} Confidence
                        </span>
                    </div>
                    <div class="text-right text-sm">
                        <div class="text-green-400 font-bold">EV: ${tip.ev}</div>
                        <div class="text-blue-400">Odds: ${tip.odds}</div>
                    </div>
                </div>
                
                <div class="tip-description text-slate-300 mb-4 leading-relaxed whitespace-pre-line">
                    ${tip.description}
                </div>
                
                <div class="flex items-center justify-between text-sm">
                    <span class="text-slate-400">Recommended Stake: ${tip.stake}</span>
                    <button onclick="tipGenerator.copyTip(${index})" class="copy-tip-btn px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 transition">
                        Copy Tip
                    </button>
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <h4 class="text-lg font-semibold text-white">Generated Tips (${tips.length})</h4>
                    <div class="text-sm text-slate-400">
                        Provider: ${this.aiManager.providers[this.aiManager.currentProvider].name}
                    </div>
                </div>
                ${tipsHTML}
            </div>
        `;
    }

    copyTip(index) {
        if (index < 0 || index >= this.currentTips.length) return;
        
        const tip = this.currentTips[index];
        const formatted = `${tip.type} - ${tip.confidence} Confidence
EV: ${tip.ev} | Odds: ${tip.odds} | Stake: ${tip.stake}

${tip.description}

Generated by AI Sports Betting Analysis`;

        navigator.clipboard.writeText(formatted).then(() => {
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.className = button.className.replace('bg-blue-600', 'bg-green-600');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.className = button.className.replace('bg-green-600', 'bg-blue-600');
            }, 2000);
        });
    }
}

// Global instances
let aiManager, imageAnalyzer, tipGenerator;

// Enhanced initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AI components
    aiManager = new AIManager();
    imageAnalyzer = new ImageAnalyzer();
    tipGenerator = new TipsGenerator(aiManager, imageAnalyzer);

    // Setup AI configuration event listeners
    setupAIEventListeners();
    
    // Initialize existing functionality
    initializeExistingFeatures();
});

function setupAIEventListeners() {
    // AI Provider Selection
    document.getElementById('ai-provider').addEventListener('change', (e) => {
        aiManager.setProvider(e.target.value);
        aiManager.updateGenerateButton();
    });

    // API Key Input
    document.getElementById('ai-api-key').addEventListener('input', (e) => {
        aiManager.setApiKey(e.target.value);
    });

    // Test Connection Button
    document.getElementById('test-ai-connection').addEventListener('click', async () => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Testing...';
        button.disabled = true;

        try {
            const success = await aiManager.testConnection();
            button.textContent = success ? 'Connected!' : 'Failed';
            button.className = success ? 
                button.className.replace('bg-blue-600', 'bg-green-600') :
                button.className.replace('bg-blue-600', 'bg-red-600');
        } catch (error) {
            button.textContent = 'Error';
            button.className = button.className.replace('bg-blue-600', 'bg-red-600');
            console.error('Connection test error:', error);
        }

        setTimeout(() => {
            button.textContent = originalText;
            button.className = button.className.replace(/bg-(green|red)-600/, 'bg-blue-600');
            button.disabled = false;
        }, 3000);
    });

    // Save AI Config Button
    document.getElementById('save-ai-config').addEventListener('click', () => {
        aiManager.saveConfig();
        
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Saved!';
        
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });

    // Generate Tips Button
    document.getElementById('generate-tips').addEventListener('click', async () => {
        const currentSport = getCurrentSelectedSport();
        const currentPrompt = getCurrentPrompt();
        
        if (!currentSport || !currentPrompt) {
            alert('Please select a sport and view its prompt first');
            return;
        }

        await tipGenerator.generateTips(currentSport, currentPrompt);
    });
}

// Utility functions for integration with existing code
function getCurrentSelectedSport() {
    // This would integrate with your existing sport selection logic
    const activeCard = document.querySelector('.sport-card.selected');
    return activeCard ? activeCard.dataset.sport : null;
}

function getCurrentPrompt() {
    // Get the current prompt text
    const promptText = document.getElementById('prompt-text');
    return promptText ? promptText.value : null;
}

function initializeExistingFeatures() {
    // This function would initialize all your existing sports betting library features
    // You would move your existing initialization code here
    console.log('Initializing existing sports betting library features...');
}

// Export for global access
window.aiManager = aiManager;
window.imageAnalyzer = imageAnalyzer;
window.tipGenerator = tipGenerator;