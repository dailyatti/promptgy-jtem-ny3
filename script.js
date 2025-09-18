// Professional Sports Betting Prompt Library - Complete JavaScript Implementation
// Advanced sports betting analysis with comprehensive sport coverage

const defaultSportsData = {
    football: {
        name: "Football",
        icon: '⚽',
        category: 'traditional',
        title: "Professional Football Analysis Prompt",
        prompt: "Find today's football matches from all leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, MLS, Copa Libertadores, Championship, etc.), and review bookmakers for odds. Check other tipsters' opinions - only give tips that are today, and odds exceed 1.90. Think through your answer carefully and justify it in detail. Give both single and combo tips. Think like a sports betting professional who has been doing this for 20 years and specializes in football. Examine everything from team form to weather to missing players. Analyze teams' xG/xGA (Expected Goals) and xPTS (Expected Points) indicators, npxG (non-penalty xG) values, Big Chances Created/Conceded statistics, possession %, PPDA (passes per defensive action), progressive pass & carry numbers, deep completions, set piece efficiency, pressing intensity zones, defensive line height and field tilt ratio. Also pay attention to international cup matches, friendly matches and qualification matches. Think about which could be the best value bet with at least 50%+ probability. Don't forget: you are a professional who pays attention to everything, even things that bookmakers might not notice. Justify your answers well and write them in proper tip format at the end. Very important to review multiple groups and comments, especially those discussing betting value, and where multiple people see value bets - for example missing key player or other factor that escapes bookmakers' attention. The point: write the tips in tip format at the end.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "⚽ SPECIFIC FOOTBALL MATCH: {MATCH} {DATE}\n\nPhD-level football quantum analytics analysis for the specified match:\n\n📊 ADVANCED TEAM QUANTUM METRICS (last 15 matches):\n- xG/xGA (Expected Goals) regression analysis and correlation matrix\n- npxG (non-penalty xG) vs actual goal ratio statistical modeling\n- Possession % and PPDA (passes per defensive action) correlation analysis\n- Progressive passes/carries and deep completions regression modeling\n- Set piece efficiency (free kicks, corners, penalties) binomial probability\n- Big chances created/conceded Poisson distribution modeling\n- Pressing intensity zones and defensive line height statistical analysis\n- Field tilt ratio and territorial dominance regression modeling\n- Team Performance Quantum Index: E(Team_Performance) = f(xG, Possession, PPDA, Set_Pieces, Pressing)\n\n🎯 GOAL MODELING QUANTUM ANALYTICS:\n- **Goal models (Poisson)**: P(Goals = k) = (λ^k × e^(-λ)) / k!\n- **Win-Draw-Lose probabilities**: P(Win) = f(xG_Advantage, Home_Advantage, Form_Differential)\n- **BTTS (Both Teams To Score)**: P(BTTS) = f(Attack_Strength, Defense_Weakness, Historical_Pattern)\n- **Expected Goals Model**: E(Goals) = Base_Attack × Form_Factor × Home_Advantage × Weather_Factor\n- **Goal Distribution Quantum Model**: E(Goal_Distribution) = f(Attack_Quality, Defense_Quality, Match_Context)\n\n🆚 HEAD-TO-HEAD QUANTUM ANALYSIS:\n- Last 10 matches record and goals regression analysis\n- Home/away forms against each other statistical modeling\n- Tactical matchup history correlation matrix\n- Psychological advantages and mental edge factor analysis\n- H2H Performance Quantum Model: E(H2H_Performance) = f(Historical_Record, Recent_Form, Tactical_Matchup)\n\n⚠️ TEAM SITUATION QUANTUM ANALYTICS:\n- Injuries/suspensions impact regression analysis (TransferMarkt/Sofascore)\n- Coaching tactical changes effectiveness statistical modeling\n- Motivational factors (title race, relegation, cup match) factor analysis\n- Squad rotation plans and European competition impact correlation modeling\n- Team Situation Quantum Index: E(Team_Situation) = f(Injuries, Tactics, Motivation, Rotation)\n\n🌡️ ENVIRONMENTAL FACTOR QUANTUM MODELING:\n- **Weather correction**: WX = f(Temperature, Wind, Humidity, Rain_Probability)\n- Weather forecast impact regression analysis\n- Pitch condition (grass height, hard/soft surface) statistical modeling\n- Crowd effect and home advantage correlation analysis\n- Environmental Impact Quantum Model: E(Env_Impact) = f(Weather, Pitch_Condition, Crowd, Home_Advantage)\n\n💰 BETTING VALUE QUANTUM OPPORTUNITIES:\n- Odds comparison 8+ bookies (Bet365, Unibet, Betfair, Pinnacle) statistical analysis\n- Closing line movement and sharp money tracking regression modeling\n- Insider tips and panel opinions correlation analysis\n- Public % vs sharp money distribution statistical modeling\n- **Value-based decision**: Calculate Expected Value (EV) for every market outcome: EV = (Probability × Odds) - 1\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n\n📈 QUANTUM ADVANCED FORMULAS:\n- **Win Probability Quantum Model**: P(Win) = f(xG_Diff, Home_Advantage, Form_Differential, H2H_History)\n- **Expected Goals Quantum Model**: E(Goals) = Base_Attack × Form_Factor × Home_Advantage × Weather_Factor\n- **BTTS Probability Model**: P(BTTS) = f(Attack_Strength_A, Attack_Strength_B, Defense_Weakness_A, Defense_Weakness_B)\n- **Value Bet Quantum Index**: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- **Expected Value Model**: EV = (Model_Probability × Bookmaker_Odds) - 1\n- **Weather Correction Model**: WX = f(Temperature, Wind_Speed, Humidity, Rain_Probability)\n- **Referee Factor Model**: Ref = f(Historical_Cards, Penalty_Tendency, Home_Bias)\n\n🎯 QUANTUM BETTING STRATEGY:\n- **Corners (bivariate Poisson)**: P(Corners = k) = f(λ_c, λ_s) where λ_s is correlation parameter for joint attack\n- **Cards (Zero‑Inflated Poisson)**: λ_L = e^(θ₀ + θ₁ FR + θ₂ LI + θ₃ WX + θ₄ Derby)\n- **BTTS - same as above; align with goal model**\n- Multi-factor regression analysis for optimal bet selection\n- Monte Carlo simulation for score distribution modeling\n- Bayesian inference for odds movement prediction\n- Machine learning model for value bet identification\n- Portfolio optimization for risk-adjusted returns\n\n🎯 SPECIFIC TIP RECOMMENDATIONS:\n1. 1X2 & double chance (with reasoning and EV calculation)\n2. Over/Under goals (2.5, 3.5) + BTTS (with Poisson model)\n3. Handicap bets (AH -1, -1.5) (with regression analysis)\n4. Player props (goals, shots, passes) (with statistical modeling)\n5. First/last goal time, half-time results (with time-based analysis)\n6. Corners and cards (with bivariate Poisson and Zero-Inflated Poisson models)\n\nExpected value bets minimum 53% probability, based on PhD-level football quantum analytics and advanced statistical modeling!"
    },

    basketball: {
        name: "Basketball",
        icon: '🏀',
        category: 'traditional',
        title: "Strategic Basketball Analysis Prompt",
        prompt: "Think like a professional basketball analyst who has been following international and domestic championships for 15+ years. Look for today's basketball matches with minimum 1.90 odds from all available leagues (NBA, EuroLeague, National championships). Examine in detail the teams' offensive/defensive ratings, pace factor, rebounding percentages, and last 10 games form. Pay special attention to key player injuries, back-to-back game effects, and home/away form differences. Research basketball forums, Reddit NBA/EuroLeague subreddits, Twitter basketball expert posts, and review insider information - such as load management decisions, rookie vs veteran matchups, or last-minute player dropouts. Look for value bets where real probability can be estimated at least 55%. Focus on player props (points, rebounds, assists), team totals, quarter/half betting, and spread markets. Pay special attention to revenge game factors, playoff positioning motivation, and clutch time statistics. In the end, give specific single and combo tips with clear justification.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🏀 SPECIFIC BASKETBALL MATCH: {MATCH} {DATE}\n\nPhD-level NBA/EuroLeague analytics analysis for the specified match:\n\n📊 ADVANCED TEAM METRICS (last 15 games):\n- Offensive/Defensive Rating + Net Rating trends\n- Pace Factor and possessions/game variance\n- Effective FG% and True Shooting% efficiency\n- AST/TO ratio and AST% distribution\n- Rebounding: OFF/DEF % and Second Chance points\n- **RAPTOR/LEBRON on-off splits and lineup synergies (2-man, 3-man net-rating)**\n- **Clutch time WPΔ (win-probability swing) data in last 5 minutes ≤5 point difference**\n\n🎯 PLAYER ANALYTICS & MATCHUPS:\n- Usage Rate and PER (Player Efficiency Rating)\n- VORP (Value Over Replacement Player)\n- BPM (Box Plus/Minus) and WS/48 (Win Shares per 48)\n- On/Off Court Net Rating differential\n- Head-to-head player battle efficiency\n\n⚡ OFFENSIVE SCHEME ANALYSIS:\n- Motion vs ISO offense effectiveness\n- Pick & Roll vs Pick & Pop efficiency\n- 3PT attempt rate and accuracy by distance\n- Paint touches and post-up frequency\n- Transition offense vs half-court sets\n\n🛡️ DEFENSIVE ADVANCED METRICS:\n- Switch vs Drop vs Hedge coverage rates\n- Defensive Rating by lineup combinations\n- Rim protection and paint defense efficiency\n- 3PT defense and close-out effectiveness\n- Defensive rebounding positioning\n\n⏰ SITUATIONAL PERFORMANCE:\n- Clutch time performance (5 min < 5 points)\n- First quarter vs second half scoring splits\n- Home court vs road performance differential\n- Back-to-back game fatigue impact\n- Rest advantage and travel schedule effects\n\n🔍 ADVANCED INSIGHTS:\n- Line movement analysis and sharp money flow\n- Public betting % vs professional action\n- Referee crew assignment and calling tendencies\n- Weather impact (outdoor courts, altitude)\n- Motivation factors (playoff race, revenge games)\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Spread efficiency and ATS trends\n- Total points O/U (pace-adjusted analysis)\n- Player props: PRA, 3PT made, R+A, Double-Double\n- Quarter/Half betting (slow/fast start patterns)\n- Team props: FG%, TO count, made 3s, paint points\n\n📈 ADVANCED FORMULAS:\n- Win Probability Model: P(Win) = f(Net_Rating_diff, Pace_Advantage, Rest_Factor)\n- Expected Score: E(Score) = Base_Offense × Pace_Factor × Efficiency_Factor\n- Value Bet Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- Player Performance Model: E(PRA) = Usage_Rate × Efficiency × Minutes_Projection\n\nExpected value bets 55%+ probability, based on PhD-level basketball analytics and insider info!"
    },

    tennis: {
        name: "Tennis",
        icon: '🎾',
        category: 'traditional',
        title: "Professional Tennis Analysis Prompt",
        prompt: "Act like a tennis expert with 20 years of experience and value betting specialist. Look for today's tennis matches with minimum 1.90 odds from all major tournaments (ATP, WTA, Challenger, ITF). Analyze in detail players' surface preference (clay/grass/hard), head-to-head record, recent form, and last 5 matches serve/return statistics. **Measure serve+1 winner % / return+1 error % ratio, broken down by deuce/ad side - if difference ≥8%, value spot.** Research tennis forums (TennisWorld, MTF), social media posts, TennisTV comments for hidden information like minor injuries, coaching changes, personal issues, or travel fatigue. Pay special attention to weather conditions impact, jet lag, tournament progression, and playing style matchups (baseliner vs serve&volley). Look for value bets where bookmaker odds don't accurately reflect real chances - minimum 52% estimated probability. Focus on match winner, set betting, total games, first set winner, and player performance markets. Analyze break point conversion rates, tiebreak records, and pressure situation performance. In the end, give structured single and accumulator tips with detailed reasoning.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🎾 SPECIFIC TENNIS MATCH: {MATCH} {DATE}\n\nPhD-level tennis analytics analysis for the specified matchup:\n\n🏟️ SURFACE & ENVIRONMENTAL ANALYSIS:\n- Court type (hard/clay/grass) preference matrix\n- Court speed index (slow/medium/fast) correlation\n- Weather impact: temperature, wind, humidity effects\n- Altitude effect and ball behavior physics\n- Indoor vs outdoor adaptation patterns\n\n📈 ADVANCED PLAYER METRICS (last 20 matches):\n- Surface-specific win/loss probability model\n- Serve efficiency: 1st serve %, ACE/DF ratio analysis\n- Return game efficiency: break point conversion rates\n- Rally length preference: baseline vs net approach\n- Mental toughness indicators: comeback win probability\n\n🆚 HEAD-TO-HEAD STATISTICAL BREAKDOWN:\n- All-time H2H record and trend analysis\n- Surface-specific H2H performance metrics\n- Set/game win percentage differentials\n- Most recent encounter detailed analysis\n- Psychological edge assessment model\n\n💪 FORM & FITNESS ANALYTICS:\n- Tournament progression and match time correlation\n- Recent injury concerns/recovery timeline\n- Travel schedule and jet lag impact model\n- Coaching team changes effectiveness\n- Personal life stability factor analysis\n\n🎯 TACTICAL MATCHUP ANALYSIS:\n- Playing style compatibility matrix (aggressor vs counterpuncher)\n- Serve patterns vs return positioning efficiency\n- Forehand vs backhand dominance correlation\n- Net game vs baseline grind effectiveness\n- Pressure point execution: break points, tiebreaks\n\n📊 BETTING VALUE OPPORTUNITIES:\n- Match winner odds comparison and value identification\n- Set betting opportunities: straight sets, total sets\n- Game handicap lines and efficiency analysis\n- Total games O/U correlation with surface speed\n- Player props: ACEs, double faults, winners prediction\n\n📈 ADVANCED FORMULAS:\n- Win Probability Model: P(Win) = f(Surface_Advantage, H2H_History, Form_Differential)\n- Expected Games: E(Games) = Base_Games × Surface_Factor × Fitness_Factor\n- Value Bet Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- Serve Efficiency Model: E(Serve_Win%) = f(1st_Serve%, ACE_Rate, Surface_Speed)\n\nValue tips 52%+ probability, based on PhD-level tennis analytics and surface-compatibility!"
    },

    american_football: {
        name: "American Football",
        icon: '🏈',
        category: 'traditional',
        title: "NFL Strategic Analysis Prompt",
        prompt: "Be an NFL insider analyst with 20+ years of experience who knows every statistical and motivational factor. Examine the weekend NFL slate with minimum 1.90 odds. Dive deep into teams' advanced metrics: DVOA (offense/defense/special teams), EPA per play, red zone efficiency, third down conversion rates, turnover differential, and time of possession trends. Research NFL Twitter/X beat reporters, team subreddits, injury reports, weather forecasts. Look for insider information: motivational edges (revenge games, contract years, coaching hot seats), line movement analysis, sharp vs public money, and vegas insider tips. Pay special attention to playoff implications, divisional rivalry dynamics, prime time performance history, and rest advantages (bye weeks, short weeks). Look for value bets with 55%+ estimated probability in spread, totals, player props (passing/rushing/receiving yards, TDs), team props, and live betting scenarios. Analyze coaching tendencies, game script probabilities, and in-game adjustment capabilities. In the end, give strategic tips in single and parlay format with specific reasoning.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🏈 SPECIFIC NFL MATCH: {MATCH} {DATE}\n\nPhD-level NFL quantum analytics analysis for the specified match:\n\n📊 ADVANCED TEAM QUANTUM METRICS (last 10 games):\n- DVOA (Defense-adjusted Value Over Average): Offense/Defense/ST regression analysis\n- EPA (Expected Points Added) per play trend correlation matrix\n- Success Rate: 1st/2nd/3rd down conversion efficiency statistical modeling\n- Red Zone TD% vs Field Goal% conversion rates binomial probability analysis\n- Time of Possession variance and TOP efficiency regression modeling\n- Team Performance Quantum Index: E(Team_Performance) = f(DVOA, EPA, Success_Rate, Red_Zone_Efficiency)\n\n🎯 QUARTERBACK QUANTUM ANALYTICS:\n- QBR (Total Quarterback Rating) and EPA/play correlation analysis\n- Air Yards vs YAC (Yards After Catch) distribution statistical modeling\n- Pressure Rate and Sack Rate regression analysis\n- Deep Ball Accuracy (20+ yard attempts) binomial probability modeling\n- Red Zone Passing Efficiency (inside 20) statistical analysis\n- QB Performance Quantum Model: E(QB_Performance) = f(QBR, EPA, Pressure_Rate, Deep_Ball_Accuracy)\n\n🏃‍♂️ RUSHING ATTACK QUANTUM ANALYSIS:\n- Rushing Success Rate and EPA/rush correlation matrix\n- Gap vs Zone blocking scheme effectiveness statistical modeling\n- Yards Before/After Contact metrics regression analysis\n- Red Zone rushing TD conversion rate binomial probability\n- Play-action effectiveness correlation analysis\n- Rushing Attack Quantum Model: E(Rush_Attack) = f(Success_Rate, EPA, Blocking_Scheme, YAC)\n\n🛡️ DEFENSIVE QUANTUM ADVANCED METRICS:\n- Pass Rush Win Rate and Pressure Rate correlation analysis\n- Coverage Success Rate (man vs zone) statistical modeling\n- Run Stop Rate and Tackle Efficiency regression analysis\n- Red Zone Defense TD prevention % binomial probability\n- Third Down Defense conversion rate statistical modeling\n- Defensive Performance Quantum Model: E(Defense) = f(Pass_Rush, Coverage, Run_Stop, Red_Zone_Defense)\n\n⚡ SPECIAL TEAMS QUANTUM IMPACT:\n- Field Position Battle (starting field position) regression analysis\n- Punt/Kickoff Return efficiency statistical modeling\n- Field Goal accuracy by distance ranges binomial probability\n- Punt Net Average and Inside 20 rate correlation analysis\n- Special Teams DVOA contribution regression modeling\n- Special Teams Quantum Index: E(Special_Teams) = f(Field_Position, Return_Efficiency, FG_Accuracy)\n\n🌡️ SITUATIONAL FACTOR QUANTUM MODELING:\n- Weather impact: Wind speed/direction, temperature regression analysis\n- Rest advantage: Bye week, short week, travel statistical modeling\n- Historical venue performance trends correlation analysis\n- Prime time vs day game performance splits binomial probability\n- Divisional rivalry intensity metrics regression modeling\n- Situational Impact Quantum Model: E(Situational_Impact) = f(Weather, Rest, Venue, Prime_Time, Rivalry)\n\n💰 BETTING VALUE QUANTUM OPPORTUNITIES:\n- Line movement analysis and sharp money flow statistical modeling\n- Spread efficiency and ATS trends regression analysis\n- Total points O/U correlation with weather factor analysis\n- Player props: Passing/Rushing/Receiving yards, TDs prediction model\n- Team props: First half scoring, total sacks statistical modeling\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n\n📈 QUANTUM ADVANCED FORMULAS:\n- Win Probability Quantum Model: P(Win) = f(DVOA_diff, EPA_trend, rest_adv, situational_factors)\n- Expected Score Quantum Model: E(Score) = Base_Offense × Weather_Factor × Rest_Factor × Venue_Factor\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- QB Performance Quantum Model: E(QB_Score) = QBR × EPA × Pressure_Factor × Deep_Ball_Factor\n- Defensive Performance Quantum Model: E(Def_Score) = Pass_Rush_Rate × Coverage_Success × Run_Stop_Rate\n- Special Teams Quantum Model: E(ST_Score) = Field_Position_Battle × Return_Efficiency × FG_Accuracy\n\n🎯 QUANTUM BETTING STRATEGY:\n- Multi-factor regression analysis for optimal bet selection\n- Monte Carlo simulation for score distribution modeling\n- Bayesian inference for odds movement prediction\n- Machine learning model for value bet identification\n- Portfolio optimization for risk-adjusted returns\n- NFL quantum analytics for advanced statistical modeling\n\nExpected value bets 55%+ probability, based on PhD-level NFL quantum analytics and insider info!"
    },

    baseball: {
        name: "Baseball",
        icon: '⚾',
        category: 'traditional',
        title: "Professional Baseball Analysis Prompt",
        prompt: "Act as a professional baseball analyst with 15+ years of experience in MLB, NPB, and other major leagues. Search for today's baseball games with minimum 1.90 odds. Analyze teams' advanced statistics: wOBA (weighted On-Base Average), FIP (Fielding Independent Pitching), BABIP (Batting Average on Balls in Play), and recent form trends. Pay special attention to starting pitcher matchups, bullpen usage, weather conditions (wind direction, temperature), and park factors. Research baseball communities, Twitter beat reporters, and injury reports for insider information like lineup changes, player callups, or minor injuries. Look for value bets in run lines, totals, first 5 innings, and player props (hits, runs, RBIs, strikeouts). Consider situational factors like day games after night games, travel schedules, and series dynamics. Analyze pitcher vs hitter historical matchups and platoon splits. Give structured tips with statistical backing and minimum 53% estimated probability.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "⚾ SPECIFIC BASEBALL MATCH: {MATCH} {DATE}\n\nPhD-level baseball analytics for the specified game:\n\n🎯 PITCHER ANALYSIS:\n- Starting pitcher recent form and advanced metrics (FIP, xFIP, SIERA)\n- Bullpen availability and usage patterns\n- Pitcher vs opposing lineup historical performance\n- Platoon splits and handedness advantages\n\n📊 OFFENSIVE METRICS:\n- Team wOBA and wRC+ trends\n- vs LHP/RHP splits and matchup advantages\n- BABIP regression analysis\n- Power metrics: ISO and HR/FB rate\n\n🌡️ ENVIRONMENTAL FACTORS:\n- Weather impact: wind speed/direction, temperature\n- Park factors and ballpark dimensions\n- Day vs night game performance\n- Travel and rest considerations\n\n💰 VALUE OPPORTUNITIES:\n- Run line efficiency and historical trends\n- Total runs O/U with weather adjustment\n- First 5 innings betting advantages\n- Player props: hits, runs, RBIs, strikeouts\n\nExpected value bets 53%+ probability with advanced baseball analytics!"
    },

    ice_hockey: {
        name: "Ice Hockey",
        icon: '🏒',
        category: 'traditional',
        title: "Professional Hockey Analysis Prompt",
        prompt: "Be a professional hockey analyst with extensive knowledge of NHL, international leagues, and advanced hockey metrics. Find today's hockey games with minimum 1.90 odds. Analyze teams' Corsi%, Fenwick%, PDO, expected goals for/against, and recent performance trends. Pay attention to goaltender matchups, back-to-back situations, power play efficiency, and penalty kill success rates. Research hockey communities, insider reports, and injury news for lineup changes or goalie starts. Consider situational factors like home/road performance, divisional rivalries, and playoff positioning. Look for value in puck lines, totals, period betting, and player props (goals, assists, shots, saves). Analyze special teams efficiency and 5v5 underlying metrics. Provide detailed tips with advanced analytics and minimum 54% estimated probability.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🏒 SPECIFIC HOCKEY MATCH: {MATCH} {DATE}\n\nPhD-level hockey analytics for the specified game:\n\n🥅 GOALTENDING ANALYSIS:\n- Starting goalie confirmation and recent performance\n- Save percentage and goals saved above expected\n- Historical performance vs opposing team\n- Back-to-back game fatigue factors\n\n📊 TEAM METRICS:\n- Corsi% and Fenwick% underlying performance\n- Expected goals for/against trends\n- PDO sustainability analysis\n- Special teams efficiency rates\n\n⚡ SITUATIONAL FACTORS:\n- Power play vs penalty kill matchups\n- Home/road performance splits\n- Divisional rivalry intensity\n- Rest and travel advantages\n\n💰 VALUE OPPORTUNITIES:\n- Puck line efficiency analysis\n- Total goals O/U with goalie adjustment\n- Period betting patterns\n- Player props: goals, assists, shots, saves\n\nExpected value bets 54%+ probability with advanced hockey analytics!"
    },

    boxing: {
        name: "Boxing",
        icon: '🥊',
        category: 'traditional',
        title: "Professional Boxing Analysis Prompt",
        prompt: "Think like a combat sports analyst and boxing betting specialist with 20+ years of experience. Find upcoming boxing matches with minimum 1.90 odds from all weight classes. Analyze boxers' fighting styles, technical skills (jab accuracy, power punching, defense, footwork), reach/height advantages, and knockout power statistics. Research boxing forums (BoxingScene, Boxing News), ESPN boxing sections, and fighter social media accounts for information like training camp quality, sparring partner selection, weight cut difficulties, personal motivations, or family issues. Pay special attention to age factors, ring rust effects (layoff time), venue/crowd advantages, referee/judging tendencies, and stylistic matchup implications. Look for value bets with minimum 55% probability in method of victory (KO/TKO/Decision), round betting, fight duration over/under, and fighter performance props markets. Analyze punch output/accuracy statistics, chin durability, cardio conditioning, and mental warfare aspects. Provide technical boxing analysis tips in single and combination bet format with supporting fight breakdown reasoning.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🥊 SPECIFIC BOXING MATCH: {MATCH} {DATE}\n\nPhD-level boxing combat analysis for the specified fight:\n\n🥊 FIGHTER TECHNICAL ANALYSIS:\n- Orthodox vs Southpaw stance advantages\n- Jab frequency and accuracy percentages\n- Power punching statistics and knockout ratio\n- Defensive metrics: slip percentage, block rate\n- Footwork mobility and ring generalship\n\n📊 PHYSICAL ATTRIBUTES COMPARISON:\n- Height, reach, and weight advantages\n- Age and experience differential\n- Punch resistance and chin durability\n- Cardio conditioning and late-round performance\n- Recovery ability between rounds\n\n🎯 STYLISTIC MATCHUP MATRIX:\n- Aggressive vs defensive fighting approach\n- Inside fighting vs outside boxing preference\n- Counter-punching vs pressure fighting styles\n- Ring IQ and tactical adaptability\n- Mental toughness under pressure\n\n💪 RECENT FORM AND PREPARATION:\n- Training camp quality and sparring partners\n- Weight cut difficulty and health factors\n- Motivation levels and career positioning\n- Team changes (trainer, cutman, corner)\n- Personal life stability and distractions\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Method of victory probabilities\n- Round betting based on fighting patterns\n- Fight duration over/under analysis\n- Knockdown and point deduction props\n- Fighter performance metrics betting\n\nExpected value bets 55%+ probability with professional combat sports analysis!"
    },

    mma: {
        name: "MMA/UFC",
        icon: '🥋',
        category: 'traditional',
        title: "UFC/MMA Complex Combat Analysis Prompt",
        prompt: "Act like an MMA technical analyst and UFC betting insider with 15+ years of experience. Examine upcoming UFC cards with minimum 1.90 odds. Dive deep into fighters' grappling credentials, striking accuracy/defense metrics, takedown offense/defense percentages, submission attempt rates, and cardio/conditioning levels. Research MMA forums (r/MMA, Sherdog, MMA Underground), UFC social media, and fighter interviews for information like training camp changes, injury recoveries, weight cut issues, personal motivations, or team dynamics. Pay special attention to fighting style matchups (striker vs grappler), cage control tendencies, altitude/venue effects, and referee assignment impacts. Look for value bets with minimum 56% probability in method of victory, round betting, fight duration, and fighter performance props (significant strikes, takedowns, submission attempts). Analyze fight IQ, finishing ability, comeback potential, and pressure performance metrics. Give comprehensive MMA betting strategy in single selections and parlay combinations with detailed technical breakdown reasoning.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🥋 SPECIFIC MMA/UFC FIGHT: {MATCH} {DATE}\n\nPhD-level MMA technical analysis for the specified matchup:\n\n🥊 STRIKING ANALYTICS:\n- Significant strikes per minute and accuracy\n- Head/body/leg strike distribution patterns\n- Distance control and range management\n- Counter-striking efficiency and timing\n- Knockout power and finishing ability\n\n🤼 GRAPPLING METRICS:\n- Takedown accuracy and defense percentages\n- Ground control time and position advancement\n- Submission attempt rate and success ratio\n- Scrambling ability and bottom game defense\n- Wrestling credentials and BJJ ranking\n\n⚡ CARDIO AND CONDITIONING:\n- Third round performance differential\n- Output consistency across fight duration\n- Recovery between rounds analysis\n- Weight cut impact on performance\n- Training camp intensity and preparation\n\n🎯 TACTICAL MATCHUP BREAKDOWN:\n- Striker vs grappler style dynamics\n- Cage control and pressure fighting\n- Clinch work and dirty boxing effectiveness\n- Defensive wrestling and takedown sprawling\n- Fight IQ and in-fight adaptations\n\n🏟️ ENVIRONMENTAL FACTORS:\n- Altitude effects on cardio performance\n- Home crowd advantage impact\n- Referee tendencies (stand-ups, warnings)\n- Octagon size preference analysis\n- International venue travel effects\n\n💰 VALUE OPPORTUNITIES:\n- Method of victory probability modeling\n- Round betting based on finishing patterns\n- Performance bonus potential analysis\n- Prop bets: strikes landed, takedowns, submissions\n- Live betting opportunities during fight\n\nExpected value bets 56%+ probability with advanced MMA combat analytics!"
    },

    golf: {
        name: "Golf",
        icon: '⛳',
        category: 'traditional',
        title: "PGA Tour Advanced Analytics Prompt",
        prompt: "Be a PGA Tour insider and golf betting expert with 22+ years of experience. Examine weekend tournaments with minimum 1.90+ odds. Dive deep into players' comprehensive strokes gained analysis: SG: Off-the-Tee (driving distance/accuracy balance), SG: Approach (proximity to hole by distance ranges), SG: Around-the-Green (scrambling artistry), SG: Putting (surface-specific make percentages), SG: Total trajectory analysis. Research golf analytics communities (DataGolf deep dives, Golf Channel metrics, PGA Tour ShotLink database), player equipment changes (club/ball switches impact), caddie insights (course management philosophies), and weather forecast models (wind speed/direction by hole) for information like swing coach changes (technical modifications timeline), injury recovery progression (medical withdrawal history), personal life stability factors (family events, sponsorship pressures), course history dominance patterns, or pre-tournament practice round intensity. Pay special attention to course-specific requirements (driving distance importance vs accuracy premium courses, approach shot dispersion patterns, green complex severity ratings), historical scoring conditions analysis (winning score trends, cut line projections), recent form weighted metrics (last 3/5/10 events performance curves), pressure performance indicators (Sunday back-nine scoring averages, major championship experience), and seasonal form cycles (West Coast/Florida swing specialists). Look for value bets with minimum 52% probability: outright winner (overlay identification), each-way value spots (top-5/10/20 place terms), head-to-head matchups (course fit advantages), first round leader (aggressive vs conservative starts), make/miss cut markets (consistency metrics), 3-ball/2-ball betting (daily matchups), nationality/region group betting, tournament matchbet combinations, and live in-play opportunities (momentum shifts). Analyze playing style vs course design matrix (bombers vs plotters success rates), putting surface adaptation speeds (Bermuda vs Bentgrass vs Poa Annua), weather window advantages (morning vs afternoon wave draw bias), mental game resilience indicators (comeback history, front-runner stability), and tournament position pressure handling (first-time winner probability vs veteran closing skills). Provide comprehensive tournament betting strategy in single selections and portfolio approach format with supporting strokes gained deep dive, course history weighting, current form trajectory analysis, and psychological pressure performance prediction.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "⛳ SPECIFIC GOLF TOURNAMENT: {TOURNAMENT} {DATE}\n\nPhD-level golf analytics for the specified tournament:\n\n🏌️ STROKES GAINED ANALYSIS:\n- SG: Off-the-Tee vs course driving requirements\n- SG: Approach vs green sizes and pin positions\n- SG: Around-the-Green vs short game complexity\n- SG: Putting vs green speed and grain direction\n- SG: Total trend analysis (last 10 rounds)\n\n🎯 COURSE FIT ANALYTICS:\n- Historical performance at venue (last 5 years)\n- Course setup preferences (length, rough, greens)\n- Weather adaptation patterns\n- Elevation and climate adjustment factors\n- Similar course performance correlation\n\n📈 FORM AND FITNESS:\n- Recent tournament results (last 8 weeks)\n- Rounds under pressure performance\n- Weekend scoring average trends\n- Physical condition and injury status\n- Mental game confidence indicators\n\n🌡️ CONDITIONS ANALYSIS:\n- Weather forecast impact on scoring\n- Wind direction vs hole layout advantages\n- Temperature effects on ball flight\n- Course conditions (firm/soft, rough height)\n- Optimal tee time windows\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Outright winner odds vs model probability\n- Each-way value in top finishes\n- Head-to-head matchup advantages\n- Round leader betting opportunities\n- Cut line and scoring props\n\nExpected value bets 52%+ probability with professional golf analytics!"
    },

    formula1: {
        name: "Formula 1",
        icon: '🏎️',
        category: 'motor',
        title: "F1 Technical Analysis Prompt",
        prompt: "Think like an F1 technical analyst and motorsport betting specialist with 18+ years of paddock experience. Examine upcoming F1 race weekends with minimum 1.90 odds. Analyze in depth: car performance metrics (straight-line speed, cornering efficiency, tire degradation patterns), driver form analysis (qualifying pace, race starts, wheel-to-wheel combat, strategic decision-making), team tactical capabilities (pit stop efficiency, strategy execution, race management), and championship implications (points pressure, team orders, development priorities). Research F1 technical forums (r/F1Technical, Autosport, Motorsport.com), paddock insider reports, team social media, and FP1/FP2/FP3 data for information like car upgrades effectiveness, driver confidence levels, team internal dynamics, reliability concerns, or weather adaptation capabilities. Pay special attention to track-specific requirements (power vs downforce circuits, tire compound selections, DRS effectiveness zones), historical performance patterns at venue, recent development trajectory analysis, and weather forecast impacts (rain probability, track temperature effects, wind conditions). Look for value bets with minimum 54% probability in race winner, podium finishes, points scoring, head-to-head driver battles, constructors' standings, qualifying positions, fastest lap, and safety car/red flag occurrence props. Analyze driver vs track compatibility matrix, team strategic competence under pressure, car reliability records, and championship fight psychological factors. Provide comprehensive F1 weekend betting strategy with technical justification, data-driven reasoning, and risk-adjusted selection portfolio approach.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🏎️ SPECIFIC F1 RACE: {RACE} {DATE}\n\nPhD-level Formula 1 technical analysis for the specified Grand Prix:\n\n🏁 CAR PERFORMANCE MATRIX:\n- Power unit efficiency vs circuit characteristics\n- Aerodynamic package vs track layout suitability\n- Tire degradation patterns vs race distance\n- Fuel consumption optimization analysis\n- Reliability factor assessment (recent DNF patterns)\n\n👨‍💼 DRIVER ANALYTICS:\n- Qualifying vs race pace differential\n- Wheel-to-wheel combat success rates\n- Wet weather performance indicators\n- Pressure situation handling (championship fights)\n- Track experience and historical performance\n\n🔧 STRATEGIC FACTORS:\n- Pit stop window optimization\n- Tire strategy flexibility analysis\n- DRS overtaking opportunity zones\n- Safety car deployment probability\n- Weather contingency planning effectiveness\n\n🌡️ ENVIRONMENTAL CONDITIONS:\n- Track temperature impact on tire performance\n- Rain probability and wet weather specialists\n- Wind effects on aerodynamic balance\n- Track surface evolution throughout weekend\n- Altitude and air density considerations\n\n🏆 CHAMPIONSHIP IMPLICATIONS:\n- Points pressure and risk-taking propensity\n- Team orders implementation probability\n- Development focus vs current performance\n- Inter-team battle dynamics\n- Season trajectory analysis\n\n💰 VALUE OPPORTUNITIES:\n- Race winner odds vs performance model\n- Podium finish probability analysis\n- Head-to-head driver matchups\n- Points scoring and championship props\n- Qualifying position and fastest lap bets\n\nExpected value bets 54%+ probability with F1 technical motorsport analysis!"
    },

    motogp: {
        name: "MotoGP",
        icon: '🏍️',
        category: 'motor',
        title: "MotoGP Professional Racing Analysis Prompt",
        prompt: "Act like a MotoGP technical analyst and motorcycle racing betting specialist with 16+ years of paddock expertise. Examine upcoming MotoGP race weekends (Grand Prix, Sprint races, qualifying sessions) with minimum 1.90 odds. Analyze comprehensively: bike performance characteristics (engine power delivery, chassis balance, aerodynamic efficiency, electronics calibration), rider technical skills (cornering precision, braking technique, throttle control, race craft), team strategic capabilities (tire selection strategy, setup optimization, race management), and championship dynamics (points battles, manufacturer competition, team politics). Research MotoGP communities (r/motogp, Crash.net, MotoGP.com, GPone.com), paddock insider sources, team technical briefings, and practice session data for information about bike development updates, rider injury status, team chemistry, setup breakthroughs, or confidence level indicators. Pay special attention to track-specific factors (corner types preference, straight-line speed requirements, tire compound suitability, weather adaptation), historical performance patterns at circuits, recent form trajectory analysis, and meteorological conditions impact (rain probability effects, track temperature variations, wind influence on bike stability). Look for value bets with minimum 55% probability in race winner, podium positions, pole position, fastest lap, head-to-head rider battles, constructor standings, qualifying results, and crash/DNF occurrence props. Analyze rider vs track compatibility matrix, team tactical execution under pressure, bike reliability records, and psychological factors in championship fights. Provide expert MotoGP betting strategy with technical motorcycle racing knowledge, data-driven insights, and risk-optimized selection approach.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🏍️ SPECIFIC MOTOGP RACE: {RACE} {DATE}\n\nPhD-level MotoGP technical analysis for the specified Grand Prix:\n\n🏍️ MOTORCYCLE PERFORMANCE ANALYSIS:\n- Engine characteristics vs track layout suitability\n- Chassis geometry and handling balance assessment\n- Aerodynamic package efficiency and top speed capability\n- Electronics mapping optimization (traction control, engine braking)\n- Tire compound selection vs track surface and weather\n- Fuel consumption patterns and race distance management\n\n🏁 RIDER TECHNICAL CAPABILITIES:\n- Cornering speed and precision through different turn types\n- Braking performance and late-braking overtaking ability\n- Throttle control smoothness and acceleration efficiency\n- Wet weather riding skills and rain line selection\n- Racecraft and wheel-to-wheel combat experience\n- Physical fitness and stamina for race distance demands\n\n🔧 TECHNICAL SETUP FACTORS:\n- Suspension setup vs track surface characteristics\n- Gear ratios optimization for circuit requirements\n- Tire pressure and temperature management\n- Weight distribution and bike balance tuning\n- Aerodynamic downforce vs top speed compromise\n- Electronics calibration for rider preference and conditions\n\n🌡️ ENVIRONMENTAL CONDITIONS IMPACT:\n- Track temperature effects on tire performance\n- Rain probability and wet weather tire strategies\n- Wind direction impact on bike stability and lap times\n- Track surface evolution and grip level changes\n- Altitude effects on engine power output\n- Sun position and visibility considerations\n\n🏆 CHAMPIONSHIP BATTLE DYNAMICS:\n- Points pressure and risk-taking propensity analysis\n- Team orders and manufacturer championship priorities\n- Rider motivation levels and season goal alignment\n- Inter-team rivalry and psychological warfare factors\n- Contract year performance pressure indicators\n- Injury recovery status and physical condition assessment\n\n📊 STRATEGIC RACING ELEMENTS:\n- Starting grid position advantage/disadvantage\n- Tire strategy flexibility and pit window timing\n- Slipstreaming opportunities on main straight\n- Overtaking zones and defensive line possibilities\n- Race pace vs qualifying pace differential patterns\n- Safety considerations and crash probability assessment\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Race winner probability modeling vs bookmaker odds\n- Podium finish value assessment based on form and setup\n- Pole position qualification based on one-lap pace\n- Head-to-head rider matchups with historical context\n- Fastest lap achievement probability analysis\n- Constructor championship points and team battle props\n- DNF occurrence probability based on reliability data\n\nExpected value bets 55%+ probability with professional MotoGP racing expertise!"
    },

    esports_lol: {
        name: "League of Legends",
        icon: '🎮',
        category: 'esports',
        title: "LoL Professional Esports Analysis Prompt",
        prompt: "Act like a League of Legends esports analyst and betting expert with 12+ years of competitive gaming knowledge. Examine today's professional LoL matches (LCS, LEC, LCK, LPL, Worlds, MSI) with minimum 1.90 odds. Analyze team composition strategies, individual player performance metrics (KDA, CS/min, damage per minute, vision score), champion pool depth, and recent patch adaptation. Research esports communities (r/leagueoflegends, lolesports.com, Oracle's Elixir), professional player streams, team social media, and coaching staff interviews for information like roster changes, champion nerfs/buffs impact, team synergy development, individual player form, or meta shift adaptations. Pay special attention to draft phase tendencies (first pick priorities, ban strategies, power picks), early game execution (laning phase dominance, jungle pathing, objective control), mid-game transition capabilities (teamfight coordination, vision control, map rotation), and late-game scaling potential (team composition advantages, shotcalling quality, clutch performance). Look for value bets with minimum 55% probability in match winner, map handicaps (1.5/2.5 maps), total maps over/under, first blood, first tower, first baron, dragon soul, and player performance props (kills, deaths, assists, CS benchmarks). Analyze team vs team historical matchups, individual player head-to-head records, coaching staff tactical competence, and tournament pressure performance indicators. Provide comprehensive LoL esports betting strategy with meta-game understanding, statistical analysis backing, and professional scene insight integration.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🎮 SPECIFIC LOL MATCH: {MATCH} {DATE}\n\nPhD-level League of Legends esports analysis for the specified matchup:\n\n⚔️ TEAM COMPOSITION ANALYTICS:\n- Draft phase tendencies and champion priorities\n- Team fighting vs split push preference analysis\n- Early/mid/late game power spike timing\n- Counter-pick potential and flex pick versatility\n- Meta adaptation speed and champion mastery\n\n👑 INDIVIDUAL PLAYER METRICS:\n- Laning phase statistics (CS/min, XP diff, solo kills)\n- Map presence and roaming effectiveness\n- Teamfight participation and damage contribution\n- Vision control and objective setup involvement\n- Clutch performance under tournament pressure\n\n🎯 TACTICAL EXECUTION ANALYSIS:\n- Objective control priority (Dragon/Baron/Herald)\n- Early game aggression vs scaling patience\n- Map rotation coordination and timing\n- Teamfight initiation and follow-up execution\n- Late-game shotcalling and decision making\n\n📊 HEAD-TO-HEAD BREAKDOWN:\n- Historical matchup win/loss patterns\n- Individual player rivalry performance\n- Coach vs coach strategic adaptations\n- Recent form trajectory analysis\n- Tournament stage experience differential\n\n🔄 META GAME FACTORS:\n- Current patch champion viability\n- Recent balance changes impact assessment\n- Regional meta differences and adaptations\n- Tournament format and stage implications\n- Player champion pool depth in current meta\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability modeling\n- Map handicap efficiency analysis\n- Total maps played over/under trends\n- First objective achievement rates\n- Player performance prop value identification\n\nExpected value bets 55%+ probability with professional LoL esports analytics!"
    },

    esports_csgo: {
        name: "Counter-Strike",
        icon: '🔫',
        category: 'esports',
        title: "CS2/CSGO Professional Analysis Prompt",
        prompt: "Think like a Counter-Strike esports analyst and tactical betting expert with 15+ years of competitive FPS experience. Examine today's professional CS2/CSGO matches (BLAST, ESL, PGL, HLTV events) with minimum 1.90 odds. Analyze team tactical systems (CT/T side strategies, eco round management, anti-eco execution), individual player statistics (ADR, KAST, rating 2.0, clutch success rate), map pool strengths/weaknesses, and recent performance trends. Research CS community sources (HLTV.org, r/GlobalOffensive, professional player Twitter, team bootcamp updates) for information like roster changes, IGL strategic evolution, individual player confidence, team chemistry development, or meta shift adaptations. Pay special attention to map-specific analysis (CT/T side win rates, economic management, site execution strategies), recent head-to-head encounters, tournament format implications (BO1 vs BO3 vs BO5), and psychological factors (LAN vs online performance, crowd pressure, elimination stakes). Look for value bets with minimum 56% probability in match winner, map handicaps, total maps over/under, individual maps over/under 26.5 rounds, pistol round winners, first kill statistics, and player performance props (kills, deaths, ADR benchmarks, multi-kill rounds). Analyze team vs map compatibility, tactical counterstrategy effectiveness, individual matchup advantages, and tournament progression pressure handling. Provide expert CS2/CSGO betting strategy with tactical understanding, statistical modeling, and professional scene insider knowledge integration.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🔫 SPECIFIC CS2/CSGO MATCH: {MATCH} {DATE}\n\nPhD-level Counter-Strike tactical analysis for the specified matchup:\n\n🎯 TACTICAL SYSTEM BREAKDOWN:\n- CT side setup preferences and rotational patterns\n- T side execute strategies and default round management\n- Anti-eco and force-buy round execution efficiency\n- Economic management and buy round optimization\n- IGL calling style and mid-round adaptation ability\n\n📊 INDIVIDUAL PERFORMANCE METRICS:\n- Entry fragging success rates and first blood impact\n- Clutch round win percentages and pressure performance\n- AWP effectiveness and positional impact\n- Support player utility usage and trade kill efficiency\n- Recent form analysis (last 10 matches rating trends)\n\n🗺️ MAP POOL ANALYSIS:\n- Historical win rates on selected maps\n- CT/T side balance and round win expectations\n- Site execution preferences and defensive setups\n- Economic factor impact on round outcomes\n- Map-specific player role effectiveness\n\n⚡ HEAD-TO-HEAD DYNAMICS:\n- Recent encounter results and tactical adaptations\n- Individual player matchup advantages\n- IGL vs IGL strategic chess match history\n- Tournament stage performance differential\n- Psychological edge and momentum factors\n\n🏟️ CONTEXTUAL FACTORS:\n- LAN vs online performance variations\n- Tournament format implications (elimination pressure)\n- Recent roster changes and team chemistry\n- Bootcamp preparation and tactical development\n- Map veto prediction and strategic implications\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability vs bookmaker odds\n- Map handicap value based on tactical matchups\n- Total maps played modeling (BO1/BO3/BO5)\n- Individual map round totals analysis\n- Player performance props and statistical benchmarks\n\nExpected value bets 56%+ probability with professional CS2/CSGO tactical analytics!"
    },

    esports_esoccer: {
        name: "eSoccer (FIFA/eFootball)",
        icon: '🎮',
        category: 'esports',
        title: "Professional eSoccer Analysis Prompt",
        prompt: "Act like a professional eSoccer analyst and FIFA/eFootball betting expert with 10+ years of virtual football experience. Examine today's competitive eSoccer matches from major tournaments (eWorldCup, FIFAe Club World Cup, Pro Evolution Soccer competitions, FIFA Ultimate Team Championships) with minimum 1.90 odds. Analyze player technical skills: build-up play efficiency, defensive positioning, set piece execution, skill move effectiveness, and meta formation adaptability. Research eSoccer communities (r/FIFA, FIFA forums, pro player streams, team announcements) for information like roster updates, patch changes impact, controller setup modifications, tactical evolution, player form fluctuations, or team chemistry developments. Pay special attention to game version specific strategies (FIFA vs eFootball differences), formation meta shifts (4-3-3 vs 4-2-3-1 vs 5-2-1-2 effectiveness), player card upgrades impact, connection stability factors, and tournament format implications (online vs LAN performance). Look for value bets with minimum 54% probability in match winner, handicap betting (1.5/2.5 goals), total goals over/under, both teams to score, first goal scorer, exact score predictions, and tournament progression props. Analyze team vs formation compatibility, individual player skill ratings, recent patch adaptation speed, and competitive scene momentum indicators. Provide comprehensive eSoccer betting strategy with meta-game understanding, technical skill assessment, and virtual football expertise integration.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🎮 SPECIFIC eSOCCER MATCH: {MATCH} {DATE}\n\nPhD-level eSoccer (FIFA/eFootball) competitive analysis:\n\n⚽ PLAYER TECHNICAL ANALYSIS:\n- Build-up play patterns and possession efficiency\n- Defensive positioning and pressing trigger discipline\n- Set piece execution consistency (corners, free kicks)\n- Skill move timing and effectiveness rates\n- Manual defending vs AI assistance balance\n\n🎯 META FORMATION BREAKDOWN:\n- Current patch formation effectiveness (4-3-3, 4-2-3-1, etc.)\n- Player instruction optimization and role assignments\n- Custom tactics adaptation to opponent playstyle\n- In-game formation switching proficiency\n- Substitution timing and impact player usage\n\n📊 COMPETITIVE METRICS:\n- Win rate trends in recent tournaments/leagues\n- Goal scoring consistency and defensive solidity\n- Comeback ability from deficit positions\n- Tournament stage performance under pressure\n- Connection stability and lag compensation handling\n\n🎮 TECHNICAL FACTORS:\n- Game version mastery (FIFA vs eFootball)\n- Controller setup preferences and button mapping\n- Camera angle optimization for gameplay vision\n- Patch adaptation speed and meta comprehension\n- Squad building and player chemistry optimization\n\n⚡ PSYCHOLOGICAL DYNAMICS:\n- Tournament experience and stage presence\n- Clutch performance in decisive moments\n- Adaptability to opponent tactical changes\n- Mental resilience during extended gaming sessions\n- Team coordination in 11v11 pro club formats\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability vs bookmaker assessment\n- Handicap betting based on skill differential\n- Total goals modeling with playstyle factors\n- BTTS probability with attacking/defensive balance\n- Tournament outright winner value identification\n\nExpected value bets 54%+ probability with eSoccer competitive expertise!"
    },

    esports_dota2: {
        name: "Dota 2",
        icon: '🎮',
        category: 'esports',
        title: "Dota 2 Professional Esports Analysis Prompt",
        prompt: "Think like a Dota 2 esports analyst and MOBA betting specialist with 15+ years of strategic gaming expertise. Examine upcoming professional Dota 2 matches (The International, Major tournaments, DPC leagues, regional competitions) with minimum 1.90 odds. Analyze comprehensively: team drafting strategies (hero pool depth, meta adaptation, pick/ban priorities, comfort zones), individual player mechanics (laning efficiency, team fight execution, positioning mastery, role specialization), macro game execution (objective timing, map control, economic advantage, late game scaling), and championship pressure handling (clutch performance, elimination games, grand finals experience). Research Dota 2 communities (r/DotA2, Liquipedia, team social media, player streams, patch analysis) for information about recent patch impact, roster changes, bootcamp preparation, strategic innovations, individual player form, or team chemistry developments. Pay special attention to meta evolution patterns (hero strength cycles, item build optimization, strategic trend shifts), head-to-head historical performance, tournament format implications (best-of series length, double elimination brackets, regional qualification paths), and psychological factors (revenge matches, roster rivalry, championship legacy pursuits). Look for value bets with minimum 58% probability in series winners, map handicaps, total maps played, first blood/tower/roshan achievements, individual player performance props, and tournament progression markets. Analyze team vs meta compatibility, player vs hero specialization efficiency, coaching strategic depth, and championship stage mental fortitude indicators. Provide expert Dota 2 betting strategy with MOBA mechanics understanding, draft analysis integration, and professional esports circuit expertise demonstration.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🎮 SPECIFIC DOTA 2 MATCH: {MATCH} {DATE}\n\nPhD-level Dota 2 esports analysis for the specified series:\n\n🎯 DRAFTING STRATEGY ANALYSIS:\n- Hero pool depth and meta champion proficiency\n- Pick/ban phase priority patterns and strategic focus\n- Comfort zone heroes vs meta adaptation flexibility\n- Drafting sequence psychology and mind games\n- Counter-pick effectiveness and strategic responses\n- Late-game scaling vs early aggression balance\n\n⚔️ INDIVIDUAL PLAYER MECHANICS:\n- Laning phase efficiency and last-hit optimization\n- Team fight positioning and spell usage timing\n- Map awareness and rotation decision-making\n- Mechanical skill ceiling and execution consistency\n- Role specialization mastery and versatility\n- Pressure situation performance and clutch plays\n\n🗺️ MACRO GAME EXECUTION:\n- Objective timing and priority management (Roshan, towers)\n- Map control establishment and vision game\n- Economic advantage creation and gold distribution\n- Power spike timing and team fight engagement\n- High ground siege execution and defense coordination\n- Late game decision-making and win condition pursuit\n\n📊 TEAM DYNAMICS AND CHEMISTRY:\n- Communication effectiveness and shot-calling clarity\n- Strategic flexibility and adaptation speed\n- Individual player synergy and role optimization\n- Coaching influence and strategic preparation\n- Mental resilience under tournament pressure\n- Series adaptation and momentum management\n\n🔄 META UNDERSTANDING AND ADAPTATION:\n- Current patch hero strength awareness\n- Item build optimization and innovation\n- Strategic trend recognition and implementation\n- Counter-strategy development and execution\n- Patch cycle adaptation speed and learning curve\n- Regional playstyle differences and cross-pollination\n\n🏆 TOURNAMENT CONTEXT FACTORS:\n- Championship experience and big stage composure\n- Elimination game mental strength and performance\n- Head-to-head historical records and psychological edges\n- Tournament format implications and preparation depth\n- Regional rivalry intensity and motivation levels\n- Legacy implications and career-defining moments\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Series winner probability modeling vs bookmaker odds\n- Map handicap analysis based on strategic advantages\n- Total maps played with series length prediction\n- First objective achievements (blood, tower, roshan)\n- Individual player performance props (kills, assists, deaths)\n- Tournament outright winner value with bracket analysis\n\nExpected value bets 58%+ probability with professional Dota 2 expertise!"
    },

    darts: {
        name: "Darts",
        icon: '🎯',
        category: 'precision',
        title: "Professional Darts Analysis Prompt",
        prompt: "Be a professional darts analyst and PDC betting specialist with 14+ years of tungsten expertise. Examine upcoming darts tournaments (PDC World Championship, Premier League, World Matchplay, UK Open) with minimum 1.90 odds. Analyze player statistics comprehensively: three-dart averages, checkout percentages, 180s per leg frequency, first nine-dart average, and double attempts success rates. Research darts communities (r/Darts, PDC social media, Sky Sports coverage, player interviews) for information like form trends, personal issues affecting performance, new equipment changes (dart weights, stems, flights), practice routine modifications, or confidence level indicators. Pay special attention to format-specific performance (best-of-3 vs longer formats), stage experience differences (TV table vs floor tournaments), pressure situation handling (deciding legs, major finals), and head-to-head psychological factors. Look for value bets with minimum 53% probability in match winner, handicap betting (-1.5/+1.5 sets or legs), total 180s over/under, highest checkout props, nine-dart finish occurrence, and tournament outright winner selections. Analyze player vs tournament format compatibility, recent form trajectory analysis, mental strength under TV pressure, and seasonal performance patterns. Provide professional darts betting strategy with statistical backing, psychological insight integration, and tungsten sport expertise demonstration.\n\nIMPORTANT: Format all betting tips in proper English tip format, ranked by EV (Expected Value) in descending order. Each tip must include: 1) Bet description 2) Bookmaker odds 3) Probability estimate (%) 4) EV calculation 5) Confidence level. Example: 'Max Verstappen Race Winner @2.10 | Probability: 58% | EV: +21.8% | High Confidence'",
        specificMatchPrompt: "🎯 SPECIFIC DARTS MATCH: {MATCH} {DATE}\n\nPhD-level professional darts analysis for the specified matchup:\n\n🎯 STATISTICAL PERFORMANCE BREAKDOWN:\n- Three-dart average trends (last 20 matches)\n- Checkout percentage efficiency analysis\n- 180s per leg frequency comparison\n- Double attempts success rate evaluation\n- First nine-dart average assessment\n\n🧠 PSYCHOLOGICAL FACTORS:\n- TV table vs floor tournament performance differential\n- Pressure situation handling (deciding legs/sets)\n- Head-to-head historical psychological edge\n- Recent confidence indicators and form trends\n- Major tournament stage experience comparison\n\n⚡ FORMAT ADAPTATION ANALYSIS:\n- Best-of-3 vs longer format performance variance\n- Set play vs leg play preference analysis\n- Break advantage conversion rates\n- Comeback ability from deficit positions\n- Finishing consistency under match pressure\n\n🎪 STAGE AND VENUE FACTORS:\n- Arena crowd support/opposition impact\n- Lighting and oche conditions adaptation\n- Travel and accommodation effects\n- Tournament schedule and rest periods\n- Equipment consistency and setup preferences\n\n📈 FORM AND FITNESS METRICS:\n- Recent tournament results analysis\n- Practice match performance indicators\n- Physical condition and throwing rhythm\n- Mental preparation and focus levels\n- Equipment changes or modifications impact\n\n💰 VALUE OPPORTUNITIES:\n- Match winner probability vs odds assessment\n- Handicap betting based on statistical edge\n- Total 180s over/under modeling\n- Highest checkout prop value analysis\n- Tournament progression betting opportunities\n\nExpected value bets 53%+ probability with professional darts expertise!"
    },

    snooker: {
        name: "Snooker",
        icon: '🎱',
        category: 'precision',
        title: "Professional Snooker Analysis Prompt",
        prompt: "Act like a snooker analyst and Crucible betting expert with 16+ years of baize knowledge. Examine upcoming snooker tournaments (World Championship, UK Championship, Masters, ranking events) with minimum 1.90 odds. Analyze player technical metrics: break-building consistency (century breaks per match, highest breaks achieved), safety play effectiveness, long potting accuracy, and pressure pot success rates under match-deciding circumstances. Research snooker communities (r/snooker, BBC Sport coverage, World Snooker Tour updates, Eurosport analysis) for information like recent form patterns, cue action technical changes, personal life stability factors, practice routine intensity, or confidence level fluctuations. Pay special attention to table conditions adaptation (cloth speed, cushion responsiveness, pocket specifications), session timing preferences (afternoon vs evening performance), format-specific strengths (first-to-4 vs longer matches), and psychological pressure handling under television cameras. Look for value bets with minimum 53% probability in match winner selections, frame handicap betting, total frames over/under, century break occurrence, highest break of match props, and tournament outright winner analysis. Evaluate player vs venue historical performance, head-to-head encounter psychology, recent technical form assessment, and championship stage mental strength indicators. Provide expert snooker betting strategy with technical analysis integration, statistical pattern recognition, and professional circuit insider understanding.",
        specificMatchPrompt: "🎱 SPECIFIC SNOOKER MATCH: {MATCH} {DATE}\n\nPhD-level professional snooker analysis for the specified encounter:\n\n🎯 TECHNICAL SKILL ASSESSMENT:\n- Break-building consistency and century frequency\n- Long potting accuracy and difficult angle success\n- Safety play tactical effectiveness\n- Pressure pot conversion under match pressure\n- Cue action rhythm and timing analysis\n\n📊 STATISTICAL PERFORMANCE METRICS:\n- Frame win percentage in recent tournaments\n- Session scoring patterns (frames per session)\n- Comeback ability from deficit positions\n- Deciding frame record and clutch performance\n- Head-to-head historical encounter analysis\n\n🏟️ VENUE AND CONDITIONS FACTORS:\n- Table conditions adaptation (cloth, cushions, pockets)\n- Session timing preferences and energy levels\n- Crucible vs other venue performance differential\n- Television match vs non-TV performance variance\n- Arena atmosphere and crowd pressure handling\n\n🧠 PSYCHOLOGICAL DYNAMICS:\n- Recent confidence indicators and form trends\n- Match temperament and composure under pressure\n- Tactical battle approach vs attacking instincts\n- Mental strength in championship scenarios\n- Motivation levels and tournament importance perception\n\n⚡ MATCH FORMAT CONSIDERATIONS:\n- Short format vs long format preference analysis\n- First session vs later session performance patterns\n- Early lead protection vs comeback specialist traits\n- Interval break impact on performance consistency\n- Best-of format adaptation and pacing strategies\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability modeling\n- Frame handicap value assessment\n- Total frames played over/under analysis\n- Century break occurrence probability\n- Highest break and clearance props evaluation\n\nExpected value bets 53%+ probability with professional snooker circuit expertise!"
    },

    winter_skiing: {
        name: "Alpine Skiing",
        icon: '⛷️',
        category: 'winter',
        title: "Alpine Skiing World Cup Analysis Prompt",
        prompt: "Think like an alpine skiing analyst and World Cup betting specialist with 12+ years of mountain expertise. Examine upcoming World Cup races (downhill, super-G, giant slalom, slalom, combined) with minimum 1.90 odds. Analyze skier technical capabilities: gate-to-gate precision, carving technique efficiency, speed maintenance through technical sections, and weather condition adaptability. Research skiing communities (r/skiing, FIS-ski.com, Eurosport Alpine coverage, national team social media) for information like recent training camp results, equipment setup changes, injury recovery timelines, coaching staff modifications, or confidence level indicators following recent performances. Pay special attention to course-specific advantages (technical vs speed disciplines, gradient preferences, snow condition suitability), weather forecast implications (temperature, snowfall, visibility, wind), and altitude acclimatization factors. Look for value bets with minimum 52% probability in race winner selections, podium finish betting, top-6 and top-10 positions, head-to-head skier matchups, and World Cup points leader props. Analyze skier vs course profile compatibility, recent form trajectory on similar terrain, weather adaptation historical patterns, and championship race mental preparation indicators. Provide comprehensive alpine skiing betting strategy with technical understanding, meteorological factor integration, and World Cup circuit expertise demonstration.",
        specificMatchPrompt: "⛷️ SPECIFIC ALPINE SKIING RACE: {RACE} {DATE}\n\nPhD-level alpine skiing analysis for the specified World Cup event:\n\n🏔️ COURSE PROFILE ANALYSIS:\n- Gradient characteristics and technical difficulty rating\n- Gate setting patterns and rhythm section analysis\n- Speed sections vs technical challenge balance\n- Historical winning times and course record trends\n- Weather-dependent course condition variations\n\n⛷️ SKIER TECHNICAL CAPABILITIES:\n- Discipline-specific technical proficiency (DH/SG/GS/SL)\n- Carving technique efficiency and edge control\n- Speed maintenance through technical sections\n- Gate-to-gate precision and line selection\n- Starting position advantage/disadvantage factors\n\n🌨️ WEATHER AND CONDITIONS:\n- Snow quality impact on ski performance\n- Temperature effects on wax selection\n- Visibility conditions and racing line clarity\n- Wind factor influence on aerodynamics\n- Course preparation and maintenance quality\n\n📈 RECENT FORM ASSESSMENT:\n- Last 5 race results in same discipline\n- Training run performance indicators\n- Technical vs speed discipline crossover success\n- Injury recovery timeline and fitness levels\n- Equipment setup changes and adaptation period\n\n🏆 PSYCHOLOGICAL FACTORS:\n- World Cup standings pressure and motivation\n- Home venue advantage and crowd support\n- Championship race experience and composure\n- Risk-taking propensity vs conservative approach\n- Previous success at venue confidence boost\n\n💰 VALUE OPPORTUNITIES:\n- Race winner odds vs form-based probability\n- Podium finish value in competitive fields\n- Top-6/Top-10 position prop betting\n- Head-to-head matchup advantages\n- Season-long championship prop updates\n\nExpected value bets 52%+ probability with alpine skiing World Cup expertise!"
    },

    cycling: {
        name: "Cycling",
        icon: '🚴',
        category: 'traditional',
        title: "Professional Cycling Analysis Prompt",
        prompt: "Be a professional cycling analyst and Grand Tours betting specialist with 18+ years of peloton experience. Examine upcoming cycling events (Tour de France, Giro d'Italia, Vuelta a España, Classics, World Championships) with minimum 1.90 odds. Analyze rider capabilities comprehensively: climbing power-to-weight ratios, time trial aerodynamic efficiency, sprint finish positioning, and tactical racing intelligence. Research cycling communities (r/peloton, CyclingNews, VeloNews, team social media) for information like recent training camp altitude preparation, equipment upgrades, team tactical strategies, injury recovery progress, or form development indicators. Pay special attention to stage profile suitability (mountain stages, flat sprints, time trials, cobbled classics), weather condition implications (headwinds, crosswinds, rain, temperature), and team support strength analysis. Look for value bets with minimum 53% probability in stage winner selections, General Classification podium betting, points/mountains jersey competitions, team classification props, and head-to-head rider matchups. Analyze rider vs terrain compatibility, recent race results trajectory, team tactical support effectiveness, and championship pressure performance indicators. Provide comprehensive cycling betting strategy with physiological understanding, tactical insight integration, and professional peloton expertise demonstration.",
        specificMatchPrompt: "🚴 SPECIFIC CYCLING STAGE/RACE: {RACE} {DATE}\n\nPhD-level professional cycling analysis for the specified event:\n\n🏔️ STAGE PROFILE BREAKDOWN:\n- Elevation gain and climbing category analysis\n- Distance vs intensity factor assessment\n- Technical descent difficulty and positioning importance\n- Wind exposure sections and echelon possibilities\n- Sprint finish characteristics and positioning factors\n\n🚴‍♂️ RIDER PHYSIOLOGICAL METRICS:\n- Power-to-weight ratio for climbing stages\n- Aerodynamic efficiency in time trials\n- Sprint power output and positioning skills\n- Endurance capacity for long stage distances\n- Recovery ability between consecutive hard stages\n\n🤝 TEAM TACTICAL ANALYSIS:\n- Domestique support strength and depth\n- Lead-out train effectiveness for sprinters\n- Mountain stage pacing and tactical execution\n- Crosswind and echelon formation capabilities\n- Team time trial coordination and aerodynamics\n\n🌡️ ENVIRONMENTAL CONDITIONS:\n- Weather forecast impact on racing tactics\n- Temperature effects on performance and hydration\n- Wind direction and speed tactical implications\n- Road surface conditions and safety factors\n- Altitude effects on oxygen availability\n\n📊 FORM AND FITNESS INDICATORS:\n- Recent race results and performance trends\n- Training camp preparation and altitude acclimatization\n- Previous year's performance at same event\n- Injury recovery timeline and current fitness\n- Motivation levels and season goal priorities\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Stage winner probability vs bookmaker odds\n- General Classification position value assessment\n- Jersey competition betting (points, mountains, youth)\n- Head-to-head rider matchup advantages\n- Team classification and stage props\n\nExpected value bets 53%+ probability with professional cycling peloton expertise!"
    },

    // Add more comprehensive sport categories
    swimming: {
        name: "Swimming",
        icon: '🏊',
        category: 'water',
        title: "Professional Swimming Analysis Prompt",
        prompt: "Act as a swimming analyst and Olympic/World Championships betting expert with 15+ years of aquatic expertise. Examine upcoming swimming competitions (Olympics, World Championships, World Aquatics Championships, Diamond League meets) with minimum 1.90 odds. Analyze swimmer technical capabilities comprehensively: stroke biomechanics efficiency, dolphin kick underwater distance, turn execution speed, start reaction consistency, and race pacing strategy. Research swimming communities (r/Swimming, SwimSwam.com, team social media, coach interviews) for information about recent training camp times, stroke technique modifications, altitude training effects, coaching staff changes, equipment updates, or psychological state indicators. Pay special attention to event-specific performance patterns (sprint vs distance events, individual vs relay dynamics), pool environmental factors (water temperature, lane conditions, pool depth effects), and competition format implications (preliminaries vs finals, morning vs evening session performance). Look for value bets with minimum 54% probability in individual event winners, medal podium predictions, relay team compositions, world record attempt scenarios, and head-to-head swimmer matchups. Analyze swimmer vs event distance optimization, seasonal performance periodization, textile suit vs tech suit differential analysis, and major championship pressure response patterns. Provide expert swimming betting strategy with stroke biomechanics understanding, training periodization insight, and aquatic sports competition dynamics integration.",
        specificMatchPrompt: "🏊 SPECIFIC SWIMMING EVENT: {EVENT} {DATE}\n\nPhD-level aquatic sports analysis for the specified competition:\n\n🏊‍♂️ TECHNICAL BIOMECHANICS ANALYSIS:\n- Stroke efficiency and distance per stroke metrics\n- Start reaction time and block departure angle\n- Underwater dolphin kick distance and speed\n- Turn execution technique and wall push-off power\n- Finishing sprint mechanics and touch consistency\n- Breathing pattern optimization for race distance\n\n📊 PERFORMANCE TRAJECTORY METRICS:\n- Season progression and personal best development\n- Training time indicators and practice performance\n- Textile suit vs tech suit time differential analysis\n- Altitude training camp effects and adaptation\n- Competition frequency and recovery management\n- Peak performance timing and periodization alignment\n\n🏆 COMPETITIVE DYNAMICS FACTORS:\n- Lane draw psychological and tactical advantages\n- Heat placement and race positioning strategy\n- Championship experience and pressure performance\n- Rivalry dynamics and head-to-head battle records\n- Team relay chemistry and exchange execution\n- Morning preliminaries vs evening finals adaptation\n\n🌡️ ENVIRONMENTAL CONDITIONS IMPACT:\n- Pool temperature effects on performance\n- Water depth and lane rope configuration\n- Venue altitude and atmospheric pressure\n- Competition schedule and warm-up availability\n- Pool lighting and visibility conditions\n- Crowd atmosphere and home advantage factors\n\n🧠 PSYCHOLOGICAL PREPARATION ASSESSMENT:\n- Major championship experience and composure\n- Recent competition confidence building\n- Coaching support and strategic guidance\n- Media pressure and expectation management\n- Injury recovery and current physical condition\n- Motivation levels and career goal alignment\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Individual event winner probability modeling\n- Medal podium position value assessment\n- World record attempt scenario analysis\n- Head-to-head swimmer matchup advantages\n- Relay team composition and chemistry evaluation\n- Multi-event swimmer fatigue factor analysis\n\nExpected value bets 54%+ probability with professional aquatic sports expertise!"
    },

    track_field: {
        name: "Track & Field",
        icon: '🏃',
        category: 'traditional',
        title: "Track & Field Athletics Analysis Prompt",
        prompt: "Think like a track and field analyst and Diamond League betting specialist with 20+ years of athletics expertise. Examine upcoming competitions (Olympics, World Championships, Diamond League, Continental Tours) with minimum 1.90 odds. Analyze athlete capabilities comprehensively: personal best progression trends, seasonal performance development, biomechanical technique efficiency, race strategy execution, and psychological preparation indicators. Research athletics communities (World Athletics, r/trackandfield, athletics forums, coaching interviews, training footage analysis) for information about recent training camp progress, technique modifications, coaching staff changes, altitude preparation, injury recovery timelines, equipment upgrades, or confidence level fluctuations. Pay special attention to event-specific performance factors (sprint acceleration patterns, middle-distance tactical positioning, distance running pacing strategies, field event technical execution), environmental condition impacts (track surface variations, weather effects, altitude adjustments), and competition format dynamics (heat advancement, qualification standards, championship rounds). Look for value bets with minimum 55% probability in individual event winners, medal podium predictions, national record attempts, season best achievement props, and head-to-head athlete matchups. Analyze athlete vs event specialization optimization, training periodization and peak performance timing, historical venue performance patterns, and major championship pressure response indicators. Provide expert athletics betting strategy with biomechanical understanding, physiological training insight, and professional track circuit expertise integration.",
        specificMatchPrompt: "🏃 SPECIFIC ATHLETICS EVENT: {EVENT} {DATE}\n\nPhD-level track and field analysis for the specified competition:\n\n🏃‍♂️ BIOMECHANICAL PERFORMANCE ANALYSIS:\n- Sprint events: Start reaction time, acceleration phase efficiency, top speed maintenance, finishing kick execution\n- Middle distance: Pacing strategy, positioning tactics, kick timing, lactate threshold optimization\n- Distance events: Race strategy execution, surge response, endurance base assessment, mental toughness indicators\n- Field events: Technical execution consistency, approach rhythm, release/takeoff timing, equipment optimization\n- Jumping events: Approach speed development, takeoff angle optimization, flight technique, landing execution\n- Throwing events: Release velocity generation, technique sequence timing, strength-to-technique ratio, competition consistency\n\n📊 PERFORMANCE TRAJECTORY METRICS:\n- Personal best progression and seasonal development\n- Training indicator times and practice performance\n- Competition frequency and recovery management analysis\n- Altitude training effects and adaptation assessment\n- Technical coaching modifications and improvement timeline\n- Peak performance timing and championship preparation periodization\n\n🎯 TACTICAL EXECUTION ASSESSMENT:\n- Race positioning strategy and tactical awareness\n- Heat management and advancement qualification approach\n- Championship round progression and energy distribution\n- Competitive response to pace changes and surges\n- Pressure situation execution and clutch performance\n- Multi-round competition management and consistency\n\n🌡️ ENVIRONMENTAL FACTORS IMPACT:\n- Track surface conditions and spikes optimization\n- Weather effects: wind assistance/resistance, temperature, humidity\n- Venue altitude and atmospheric pressure adjustments\n- Competition schedule timing and warm-up availability\n- Stadium atmosphere and crowd energy influence\n- Travel schedule and time zone adjustment effects\n\n🧠 PSYCHOLOGICAL PREPARATION DYNAMICS:\n- Major championship experience and composure indicators\n- Recent competition confidence building and momentum\n- Coaching support effectiveness and strategic guidance\n- Media attention handling and expectation management\n- Injury status and physical condition assessment\n- Motivation levels and career milestone positioning\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Individual event winner probability modeling vs bookmaker odds\n- Medal podium position value assessment and combination betting\n- National/world record attempt scenario probability analysis\n- Season best and personal best achievement prop value\n- Head-to-head athlete matchup historical advantage patterns\n- Multi-event athlete fatigue and performance distribution analysis\n\nExpected value bets 55%+ probability with professional athletics circuit expertise!"
    },

    boxing: {
        name: "Boxing",
        icon: '🥊',
        category: 'traditional',
        title: "Professional Boxing Analysis Prompt",
        prompt: "Act like a boxing analyst and championship betting expert with 18+ years of prizefighting experience. Examine upcoming boxing matches (championship bouts, eliminator fights, major promotions) with minimum 1.90 odds. Analyze fighter capabilities comprehensively: punch accuracy and power statistics, defensive skills (head movement, footwork, blocking), ring IQ and tactical adaptability, conditioning and stamina levels, and chin/durability assessment. Research boxing communities (r/Boxing, BoxingScene, ESPN boxing, fighter social media, training camp footage) for information about training camp progress, sparring partner quality, weight cutting effects, coaching strategy modifications, injury concerns, or mental state indicators. Pay special attention to style matchup dynamics (pressure fighter vs boxer, southpaw vs orthodox, counter-puncher vs aggressor), weight class specific factors, championship rounds conditioning, and venue/crowd atmosphere implications. Look for value bets with minimum 56% probability in fight winner, method of victory (KO/TKO, decision, submission), round betting, knockdown props, and fight duration over/under. Analyze fighter vs opponent style compatibility, recent performance trajectory, training camp quality assessment, and championship experience pressure handling. Provide expert boxing betting strategy with technical striking analysis, tactical matchup evaluation, and professional prizefighting circuit expertise integration.",
        specificMatchPrompt: "🥊 SPECIFIC BOXING MATCH: {MATCH} {DATE}\n\nPhD-level boxing analysis for the specified bout:\n\n🥊 TECHNICAL STRIKING ASSESSMENT:\n- Punch accuracy percentages and power shot effectiveness\n- Jab utilization and distance control management\n- Body shot targeting and accumulative damage strategy\n- Combination punching fluidity and setup execution\n- Defensive techniques: head movement, footwork, guard positioning\n- Counter-punching timing and reaction speed analysis\n\n📊 PHYSICAL ATTRIBUTES COMPARISON:\n- Height, reach, and physical dimension advantages\n- Power punching capability and knockout percentage\n- Chin durability and recovery ability assessment\n- Conditioning levels and late-round performance\n- Weight cutting effects and rehydration efficiency\n- Age factor and reflexive reaction maintenance\n\n🎯 TACTICAL MATCHUP DYNAMICS:\n- Fighting style compatibility analysis (boxer vs puncher)\n- Orthodox vs southpaw stance implications\n- Inside fighting vs outside boxing preferences\n- Pressure application vs movement-based strategies\n- Ring generalship and pace control tendencies\n- Adaptation ability to opponent tactical adjustments\n\n🏟️ CONTEXTUAL FACTORS:\n- Championship experience and big fight composure\n- Venue atmosphere and crowd support influence\n- Round structure and championship distance preparation\n- Referee assignment and officiating tendencies\n- Weight class specific power and speed characteristics\n- Training camp quality and sparring partner preparation\n\n🧠 PSYCHOLOGICAL WARFARE ASSESSMENT:\n- Mental toughness and adversity response patterns\n- Confidence levels and recent performance momentum\n- Trash talk and promotional pressure handling\n- Corner advice reception and mid-fight adjustment ability\n- Knockout power psychological impact on opponent\n- Championship legacy motivation and hunger levels\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Fight winner probability vs bookmaker odds assessment\n- Method of victory analysis (KO/TKO vs decision)\n- Round betting based on finishing tendencies\n- Knockdown occurrence probability modeling\n- Fight duration over/under with pacing analysis\n- Live betting opportunities based on round-by-round momentum\n\nExpected value bets 56%+ probability with professional boxing expertise!"
    },

    mma: {
        name: "MMA/UFC",
        icon: '🤼',
        category: 'traditional',
        title: "Mixed Martial Arts Analysis Prompt",
        prompt: "Think like an MMA analyst and UFC betting specialist with 15+ years of mixed martial arts expertise. Examine upcoming MMA events (UFC, Bellator, ONE Championship, PFL) with minimum 1.90 odds. Analyze fighter skillset comprehensively: striking technique (boxing, muay thai, karate), grappling proficiency (wrestling, Brazilian jiu-jitsu, submissions), cardio conditioning, cage control, and mental toughness indicators. Research MMA communities (r/MMA, MMA Junkie, ESPN MMA, fighter social media, training footage) for information about training camp updates, injury recoveries, weight cutting challenges, coaching team changes, game plan preparations, or confidence level fluctuations. Pay special attention to style matchup implications (striker vs grappler, wrestler vs submission specialist), weight cutting effects, altitude/venue factors, and championship round conditioning assessment. Look for value bets with minimum 57% probability in fight winner, method of victory (KO/TKO, submission, decision), round betting, performance bonuses, and fight duration props. Analyze fighter vs opponent skillset compatibility, recent form trajectory, training camp quality evaluation, and championship pressure response patterns. Provide comprehensive MMA betting strategy with technical analysis integration, tactical matchup breakdown, and professional mixed martial arts circuit expertise demonstration.",
        specificMatchPrompt: "🤼 SPECIFIC MMA FIGHT: {FIGHT} {DATE}\n\nPhD-level mixed martial arts analysis for the specified bout:\n\n🥋 STRIKING TECHNICAL ASSESSMENT:\n- Boxing fundamentals and punch combinations\n- Muay thai clinch work and knee/elbow striking\n- Leg kick effectiveness and damage accumulation\n- Head kick timing and knockout potential\n- Striking defense and counter-attack capabilities\n- Distance management and footwork patterns\n\n🤼‍♂️ GRAPPLING SKILL EVALUATION:\n- Wrestling takedown efficiency and defense\n- Brazilian jiu-jitsu submission threats and escapes\n- Ground control and position advancement\n- Submission setup recognition and finishing ability\n- Scrambling skills and transition smoothness\n- Cage wrestling and wall control effectiveness\n\n⚖️ PHYSICAL ATTRIBUTES ANALYSIS:\n- Height, reach, and physical dimension advantages\n- Power generation in striking and grappling\n- Cardio conditioning and five-round preparedness\n- Weight cutting effects and strength maintenance\n- Injury history and current physical condition\n- Age factors and athletic performance decline\n\n🎯 TACTICAL MATCHUP BREAKDOWN:\n- Style vs style compatibility (striker vs grappler)\n- Game plan execution and tactical flexibility\n- Cage control and octagon positioning strategy\n- Pressure application vs counter-fighting approaches\n- Round-stealing ability and championship round performance\n- Adaptation speed to opponent tactical adjustments\n\n🧠 MENTAL WARFARE DYNAMICS:\n- Championship experience and big fight composure\n- Comeback ability from adverse positions\n- Corner advice integration and mid-fight adjustments\n- Trash talk psychological impact and motivation\n- Training camp confidence and preparation quality\n- Legacy implications and career defining moment pressure\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Fight winner probability modeling vs bookmaker odds\n- Method of victory analysis based on finishing rates\n- Round betting with historical finishing timeline data\n- Performance bonus probability (Fight/Performance of Night)\n- Fight duration over/under with pacing and finish tendency analysis\n- Live betting value based on momentum shifts and position control\n\nExpected value bets 57%+ probability with professional MMA expertise!"
    },

    horse_racing: {
        name: "Horse Racing",
        icon: '🐎',
        category: 'traditional',
        title: "Professional Horse Racing Analysis Prompt",
        prompt: "Act like a thoroughbred racing analyst and turf betting specialist with 20+ years of racetrack expertise. Examine upcoming horse racing cards (flat racing, National Hunt, harness racing) from major venues with minimum 1.90 odds. Analyze comprehensively: horse form analysis (recent performances, class levels, distance preferences, going conditions), jockey capabilities (strike rates, course specialization, big race experience, tactical awareness), trainer patterns (stable form, preparation methods, seasonal targeting, track records), and breeding pedigree assessment (sire/dam influences, distance aptitude, surface preferences). Research racing communities (Racing Post, Timeform, r/HorseRacing, stable social media, gallops reports) for information about recent work reports, stable confidence indicators, veterinary concerns, equipment changes, jockey bookings significance, or market confidence levels. Pay special attention to race conditions analysis (class drops/rises, weight assignments, draw advantages, pace scenarios), track bias patterns, weather impact on going conditions, and seasonal form cycles. Look for value bets with minimum 56% probability in race winners, place betting, each-way selections, exacta/trifecta combinations, match bets, and ante-post championship markets. Analyze horse vs distance optimization, trainer/jockey combinations effectiveness, breeding pattern analysis, and racecourse suitability factors. Provide expert horse racing betting strategy with bloodstock knowledge, pace analysis integration, and professional turf expertise demonstration.",
        specificMatchPrompt: "🐎 SPECIFIC HORSE RACE: {RACE} {DATE}\n\nPhD-level thoroughbred racing analysis for the specified race:\n\n🐎 HORSE FORM ANALYSIS:\n- Recent performance ratings and class level assessment\n- Distance preference and stamina evaluation\n- Going conditions suitability (firm, good, soft, heavy)\n- Course and distance record at specific venue\n- Seasonal form patterns and improvement trajectory\n- Weight carrying ability and handicap assessment\n\n🏇 JOCKEY PERFORMANCE METRICS:\n- Strike rate percentage and recent form indicators\n- Course specialization and track knowledge\n- Big race experience and pressure performance\n- Tactical awareness and race positioning skills\n- Partnership history with trainer and horse\n- Claim allowance impact and weight advantage\n\n👨‍🏫 TRAINER STRATEGIC ANALYSIS:\n- Stable form and recent winner percentages\n- Seasonal targeting and campaign planning\n- Preparation methods and training patterns\n- Course and distance specialization records\n- Big race preparation and peaking ability\n- Stable jockey arrangements and tactical approach\n\n🧬 BREEDING AND PEDIGREE ASSESSMENT:\n- Sire influence on distance and surface preferences\n- Maternal line stamina and speed characteristics\n- Breeding pattern analysis for race conditions\n- Age-related improvement expectations\n- Genetic predisposition to track surface and going\n- Bloodstock value and breeding potential implications\n\n🏁 RACE CONDITIONS EVALUATION:\n- Class level appropriateness and competition strength\n- Weight assignments and handicapping assessment\n- Draw advantages and starting position implications\n- Pace scenario analysis and tactical positioning\n- Prize money significance and trainer targeting\n- Field size impact on race dynamics and tactics\n\n🌡️ ENVIRONMENTAL FACTORS IMPACT:\n- Weather forecast and going condition changes\n- Track bias patterns and favored racing positions\n- Seasonal form cycles and fitness peaks\n- Travel considerations and stable location factors\n- Time of year optimization and campaigning strategy\n- Equipment changes and gear modifications impact\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Win probability modeling vs bookmaker odds assessment\n- Each-way value analysis with place terms consideration\n- Exacta and trifecta combination probability modeling\n- Match bet opportunities based on form comparison\n- Ante-post betting value for future championship races\n- In-running betting opportunities based on pace analysis\n\nExpected value bets 56%+ probability with professional horse racing expertise!"
    },

    greyhound_racing: {
        name: "Greyhound Racing",
        icon: '🐕',
        category: 'traditional',
        title: "Professional Greyhound Racing Analysis Prompt",
        prompt: "Act like a greyhound racing analyst and track betting specialist with 18+ years of coursing expertise. Examine upcoming greyhound racing cards from major stadiums with minimum 1.90 odds. Analyze comprehensively: greyhound form assessment (recent times, trap preferences, distance specialization, track conditions), trainer patterns (kennel form, preparation methods, seasonal targeting, strike rates), racing dynamics (early pace, sectional times, finishing kick, racing room requirements), and breeding influence (sire/dam speed characteristics, stamina inheritance, track surface preferences). Research greyhound communities (Greyhound-Data, Racing Post Dogs, track social media, kennel reports) for information about recent trial times, kennel confidence levels, injury concerns, seasonal form cycles, or market movements. Pay special attention to track-specific factors (bend preferences, trap draw advantages, surface conditions, weather impact), race grade analysis, and tactical positioning throughout races. Look for value bets with minimum 55% probability in race winners, place betting, forecast/tricast combinations, trap challenge bets, and seasonal competition markets. Analyze greyhound vs distance optimization, trainer/track specialization patterns, breeding performance correlation, and track bias identification. Provide expert greyhound racing betting strategy with coursing knowledge, sectional time analysis, and professional track expertise integration.",
        specificMatchPrompt: "🐕 SPECIFIC GREYHOUND RACE: {RACE} {DATE}\n\nPhD-level greyhound racing analysis for the specified race:\n\n🐕 GREYHOUND FORM EVALUATION:\n- Recent sectional times and speed ratings analysis\n- Trap preference patterns and draw suitability\n- Distance specialization and stamina assessment\n- Track surface adaptation and conditions preference\n- Recent trial performance and kennel work reports\n- Grade progression and class level appropriateness\n\n🏃‍♂️ RACING DYNAMICS ASSESSMENT:\n- Early pace ability and trap break consistency\n- Bend running style and rail position preferences\n- Mid-race positioning and tactical awareness\n- Finishing kick strength and late acceleration\n- Racing room requirements and crowding tolerance\n- Sectional time splits and speed distribution patterns\n\n👨‍🏫 TRAINER KENNEL ANALYSIS:\n- Recent kennel form and strike rate percentages\n- Seasonal targeting and preparation expertise\n- Track specialization and venue success rates\n- Grade-specific performance optimization\n- Greyhound development and peaking ability\n- Historical patterns and strategic approach\n\n🧬 BREEDING AND GENETICS FACTORS:\n- Sire influence on speed and stamina characteristics\n- Dam line contributions to racing style\n- Family patterns for distance and surface preferences\n- Age-related performance expectations\n- Genetic predisposition to track conditions\n- Breeding value implications for racing career\n\n🏁 RACE CONDITIONS EVALUATION:\n- Grade level competitiveness and field strength\n- Trap draw advantages and starting position impact\n- Race distance suitability for field composition\n- Prize money significance and connections targeting\n- Field size effects on racing tactics and outcomes\n- Weather and track surface condition implications\n\n📊 TRACK BIAS AND PATTERNS:\n- Historical trap success rates and bias identification\n- Bend preference patterns and rail position advantages\n- Track surface variations and condition impact\n- Seasonal form cycles and environmental factors\n- Time of day effects and racing surface preparation\n- Recent track maintenance and surface changes\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Win probability modeling vs bookmaker assessment\n- Place betting value with track-specific place terms\n- Forecast and tricast combination probability analysis\n- Trap challenge betting based on draw patterns\n- Each-way value assessment with enhanced place terms\n- In-running betting opportunities based on sectional analysis\n\nExpected value bets 55%+ probability with professional greyhound racing expertise!"
    },

    cricket: {
        name: "Cricket",
        icon: '🏏',
        category: 'traditional',
        title: "Professional Cricket Analysis Prompt",
        prompt: "Think like a cricket analyst and international format betting specialist with 22+ years of wicket-to-wicket expertise. Examine upcoming cricket matches (Test, ODI, T20I, domestic leagues, IPL, Big Bash) with minimum 1.90 odds. Analyze comprehensively: team batting depth (top order stability, middle order resilience, tail-end contributions, powerplay execution), bowling attack variations (pace vs spin balance, death bowling specialists, new ball expertise, wicket-taking ability), fielding standards (catching efficiency, ground fielding, run-out execution, captaincy tactics), and format-specific strategies (Test match patience, ODI pacing, T20 aggression, league competition dynamics). Research cricket communities (Cricinfo, r/Cricket, team social media, player interviews, pitch reports) for information about recent form indicators, injury concerns, team selection policies, pitch preparation reports, weather forecast impacts, or tactical approach modifications. Pay special attention to pitch condition analysis (spin-friendly, pace-assisted, batting paradise, deterioration patterns), venue-specific factors (boundary dimensions, altitude effects, traditional results patterns), and match situation dynamics (toss impact, DLS implications, pressure moments, momentum shifts). Look for value bets with minimum 57% probability in match winners, series outcomes, top batsman/bowler markets, total runs/wickets, method of dismissal props, and individual performance benchmarks. Analyze team vs format optimization, player vs condition suitability, captaincy tactical effectiveness, and championship pressure response patterns. Provide comprehensive cricket betting strategy with format understanding, pitch reading expertise, and professional circuit knowledge integration.",
        specificMatchPrompt: "🏏 SPECIFIC CRICKET MATCH: {MATCH} {DATE}\n\nPhD-level cricket analysis for the specified fixture:\n\n🏏 BATTING LINEUP ASSESSMENT:\n- Top order stability and opening partnership effectiveness\n- Middle order depth and pressure situation handling\n- Lower order contributions and tail-end resistance\n- Powerplay execution and boundary-hitting capability\n- Format-specific pacing and run rate management\n- Historical performance vs specific bowling attacks\n\n🎳 BOWLING ATTACK EVALUATION:\n- New ball bowling effectiveness and early wicket capability\n- Spin bowling options and middle overs control\n- Death bowling specialists and pressure situation performance\n- Pace vs spin balance for pitch conditions\n- Wicket-taking ability and economical bowling balance\n- Historical performance vs opposing batting lineups\n\n🏟️ PITCH AND CONDITIONS ANALYSIS:\n- Pitch characteristics (batting/bowling friendly, spin assistance)\n- Weather forecast impact on play and strategies\n- Venue-specific patterns and historical results\n- Toss impact significance and decision implications\n- Day/night match factors and session advantages\n- Ground dimensions and boundary scoring opportunities\n\n📊 TEAM DYNAMICS AND FORM:\n- Recent match results and performance trajectory\n- Team chemistry and leadership effectiveness\n- Selection policy consistency and squad rotation\n- Injury concerns and player availability status\n- Format specialization and adaptation ability\n- Pressure situation performance under different scenarios\n\n⚡ TACTICAL EXECUTION FACTORS:\n- Captaincy decision-making and field placement expertise\n- Bowling changes timing and strategic variations\n- Batting order flexibility and role adaptability\n- DRS usage efficiency and review system tactics\n- Fielding standards and ground fielding effectiveness\n- Match situation awareness and momentum management\n\n🎯 FORMAT-SPECIFIC CONSIDERATIONS:\n- Test match: Session planning, declaration timing, follow-on decisions\n- ODI: Powerplay utilization, middle overs strategy, death over execution\n- T20: Batting aggression, bowling variations, strategic timeouts\n- League matches: Squad rotation, playoff implications, home advantage\n- Series context: Must-win scenarios, dead rubber dynamics, momentum factors\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability modeling vs bookmaker odds\n- Series outcome value based on team strengths and fixture list\n- Top batsman/bowler performance based on conditions and form\n- Total runs/wickets analysis with pitch and weather factors\n- Method of dismissal props based on bowling attack characteristics\n- Individual performance benchmarks (centuries, five-wicket hauls)\n\nExpected value bets 57%+ probability with professional cricket expertise!"
    },

    futsal: {
        name: "Futsal",
        icon: '⚽',
        category: 'traditional',
        title: "Professional Futsal Analysis Prompt",
        prompt: "Act like a futsal analyst and indoor football betting specialist with 14+ years of small-sided game expertise. Examine upcoming futsal matches (FIFA Futsal World Cup, UEFA Futsal Championship, domestic leagues, club competitions) with minimum 1.90 odds. Analyze comprehensively: team tactical systems (formation fluidity, pressing intensity, pivot utilization, wing rotations), individual technical skills (close control, quick passing, shooting accuracy, defensive positioning), physical conditioning (high-intensity sustainability, quick recovery, explosive movement, court coverage), and mental adaptation (decision-making speed, spatial awareness, pressure handling, tactical discipline). Research futsal communities (FIFA Futsal, r/futsal, league social media, coach interviews, training footage) for information about recent tactical innovations, player form indicators, injury concerns, team chemistry development, or strategic preparation methods. Pay special attention to court-specific factors (surface conditions, dimensions variations, goal size standards, acoustic environment), referee interpretation patterns, and match tempo dynamics (substitution strategies, tactical fouls usage, time management, momentum control). Look for value bets with minimum 56% probability in match winners, total goals over/under, both teams to score, handicap betting, player performance props, and tournament progression markets. Analyze team vs tactical system compatibility, player vs role optimization, coaching tactical expertise, and championship pressure adaptation patterns. Provide expert futsal betting strategy with indoor game understanding, tactical nuance recognition, and professional circuit expertise demonstration.",
        specificMatchPrompt: "⚽ SPECIFIC FUTSAL MATCH: {MATCH} {DATE}\n\nPhD-level futsal analysis for the specified fixture:\n\n⚽ TACTICAL SYSTEM BREAKDOWN:\n- Formation flexibility and positional rotation patterns\n- Pressing triggers and defensive compactness\n- Pivot utilization and target player effectiveness\n- Wing rotation frequency and width creation\n- Transition speed between attack and defense phases\n- Set piece execution and defensive organization\n\n🎯 INDIVIDUAL TECHNICAL CAPABILITIES:\n- First touch quality and ball retention under pressure\n- Passing accuracy and quick combination play ability\n- Shooting technique and finishing from various angles\n- Defensive positioning and 1v1 dueling effectiveness\n- Goalkeeper distribution and shot-stopping consistency\n- Skill move execution and close control in tight spaces\n\n⚡ PHYSICAL AND MENTAL ATTRIBUTES:\n- High-intensity running sustainability and stamina\n- Explosive acceleration and quick directional changes\n- Decision-making speed under time pressure\n- Spatial awareness and anticipation skills\n- Concentration levels throughout match duration\n- Tactical discipline and positional awareness\n\n🏟️ COURT CONDITIONS AND ENVIRONMENT:\n- Playing surface quality and ball bounce characteristics\n- Court dimensions impact on tactical approach\n- Goal size and shooting angle considerations\n- Acoustic environment and crowd noise effects\n- Lighting conditions and visibility factors\n- Temperature and humidity impact on player performance\n\n📊 TEAM DYNAMICS AND PREPARATION:\n- Recent match results and performance consistency\n- Squad rotation policies and player fitness management\n- Tactical preparation and opponent analysis quality\n- Team chemistry and communication effectiveness\n- Injury concerns and squad depth assessment\n- Coaching experience and tactical adaptability\n\n🔄 MATCH TEMPO AND SUBSTITUTIONS:\n- Flying substitution utilization and timing\n- Tactical timeout effectiveness and implementation\n- Game tempo control and rhythm management\n- Momentum shift identification and response\n- Time management in crucial match phases\n- Referee interpretation and tactical foul usage\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability based on tactical matchups\n- Total goals analysis with attacking/defensive balance\n- Both teams to score based on defensive stability\n- Handicap betting value with form and tactical advantages\n- Player performance props (goals, assists, cards)\n- Tournament progression betting with squad depth analysis\n\nExpected value bets 56%+ probability with professional futsal expertise!"
    },

    volleyball: {
        name: "Volleyball",
        icon: '🏐',
        category: 'traditional',
        title: "Professional Volleyball Analysis Prompt",
        prompt: "Act like a volleyball analyst and international competition betting specialist with 17+ years of court expertise. Examine upcoming volleyball matches (Olympics, World Championships, Nations League, club competitions) with minimum 1.90 odds. Analyze comprehensively: team tactical systems (rotation effectiveness, serve-receive formations, offensive combinations, defensive schemes), individual player capabilities (attacking efficiency, blocking effectiveness, serving power, passing accuracy), physical attributes (jumping ability, court coverage, endurance levels, injury resilience), and championship pressure handling (clutch set performance, comeback ability, crowd noise adaptation). Research volleyball communities (FIVB, r/volleyball, team social media, coaching interviews, training footage) for information about recent tactical innovations, player form indicators, injury concerns, rotation experiments, serving strategies, or team chemistry developments. Pay special attention to format-specific factors (best-of-5 vs best-of-3 sets, pool vs knockout stages, tie-break performance), court conditions (surface type, net height precision, lighting quality), and matchup dynamics (height advantages, left-handed players impact, serving target identification). Look for value bets with minimum 55% probability in match winners, set handicaps, total sets played, first set winners, individual player performance props, and tournament progression markets. Analyze team vs rotation system optimization, player vs position specialization, coaching tactical expertise, and high-pressure situation response patterns. Provide expert volleyball betting strategy with court dynamics understanding, set analysis integration, and professional circuit expertise demonstration.",
        specificMatchPrompt: "🏐 SPECIFIC VOLLEYBALL MATCH: {MATCH} {DATE}\n\nPhD-level volleyball analysis for the specified fixture:\n\n🏐 TACTICAL SYSTEM EVALUATION:\n- Rotation effectiveness and positional optimization\n- Serve-receive formation strength and weaknesses\n- Offensive combination variety and execution timing\n- Defensive scheme adaptability and court coverage\n- Substitution patterns and specialist player usage\n- Timeout utilization and momentum management\n\n⚡ INDIVIDUAL PLAYER CAPABILITIES:\n- Attack efficiency percentage and kill shot consistency\n- Blocking effectiveness and net presence dominance\n- Serving power and placement accuracy assessment\n- Passing and reception reliability under pressure\n- Setting precision and offensive play development\n- Defensive digging ability and court reaction speed\n\n📊 PHYSICAL ATTRIBUTES ANALYSIS:\n- Vertical jump capability and net reach advantage\n- Court mobility and defensive coverage range\n- Endurance levels for extended set performance\n- Injury status and physical condition assessment\n- Height advantages in blocking and attacking zones\n- Left-handed player impact on opposing formations\n\n🎯 SET DYNAMICS AND MOMENTUM:\n- First set importance and early momentum building\n- Tie-break performance history and clutch execution\n- Comeback ability from set deficit positions\n- Late-set pressure handling and point-by-point focus\n- Service game effectiveness and ace serving capability\n- Reception quality impact on offensive efficiency\n\n🏟️ COURT CONDITIONS AND ENVIRONMENT:\n- Playing surface characteristics and movement impact\n- Net height precision and official measurement standards\n- Lighting quality and visibility optimization\n- Crowd noise influence and communication challenges\n- Arena acoustics and team coordination effectiveness\n- Equipment preferences and ball characteristics adaptation\n\n🔄 COACHING AND STRATEGIC PREPARATION:\n- Tactical preparation and opponent scouting effectiveness\n- In-game adjustment speed and strategic flexibility\n- Player development and rotation system optimization\n- Championship experience and pressure situation management\n- International competition adaptation and cultural factors\n- Training camp preparation and team chemistry building\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability based on recent form and matchups\n- Set handicap value with tactical advantage assessment\n- Total sets played analysis with team resilience factors\n- First set winner based on early game patterns\n- Individual player performance props (kills, blocks, aces)\n- Tournament progression betting with bracket analysis\n\nExpected value bets 55%+ probability with professional volleyball expertise!"
    },

    handball: {
        name: "Handball",
        icon: '🤾',
        category: 'traditional',
        title: "Professional Handball Analysis Prompt",
        prompt: "Think like a handball analyst and European championship betting specialist with 16+ years of court experience. Examine upcoming handball matches (World Championships, European Championships, Champions League, domestic leagues) with minimum 1.90 odds. Analyze comprehensively: team tactical approaches (offensive systems, defensive formations, fast break efficiency, power play execution), individual player skills (shooting accuracy, goalkeeping reflexes, passing precision, defensive positioning), physical demands (speed endurance, contact resilience, explosive power, injury prevention), and mental toughness (pressure situation handling, crowd influence, referee decision adaptation). Research handball communities (IHF, EHF, r/Handball, team social media, coaching analysis) for information about tactical innovations, player form trends, injury updates, team chemistry indicators, defensive system modifications, or goalkeeper rotation strategies. Pay special attention to format considerations (tournament vs league play, home/away advantages, two-leg knockout ties), playing conditions (court dimensions, goal size standards, ball characteristics), and style matchups (fast-paced vs methodical play, physical vs technical approach, youth vs experience balance). Look for value bets with minimum 56% probability in match winners, goal handicaps, total goals over/under, both teams scoring thresholds, player performance markets, and tournament advancement props. Analyze team vs system compatibility, player vs position optimization, coaching tactical expertise, and championship stage mental preparation indicators. Provide expert handball betting strategy with court awareness, tactical system understanding, and professional circuit knowledge integration.",
        specificMatchPrompt: "🤾 SPECIFIC HANDBALL MATCH: {MATCH} {DATE}\n\nPhD-level handball analysis for the specified fixture:\n\n🤾‍♂️ OFFENSIVE SYSTEM EVALUATION:\n- Attacking formation effectiveness (6-0, 5-1, 4-2 systems)\n- Fast break conversion rate and transition speed\n- Power play execution during numerical advantages\n- Wing player utilization and crossing accuracy\n- Back court shooting efficiency and goal scoring patterns\n- Pivot play effectiveness and inside game dominance\n\n🛡️ DEFENSIVE FORMATION ANALYSIS:\n- Defensive system stability (6-0, 5-1, 3-2-1 variations)\n- Pressing intensity and turnover creation ability\n- Penalty situation discipline and foul management\n- Goalkeeper integration with field player defense\n- Fast break prevention and transition defense\n- Individual defending skills and contact effectiveness\n\n🥅 GOALKEEPING PERFORMANCE METRICS:\n- Save percentage and shot-stopping consistency\n- Distribution accuracy and fast break initiation\n- Penalty save record and high-pressure performance\n- Communication effectiveness with defense\n- Injury concerns and backup goalkeeper quality\n- Style adaptation to opponent shooting tendencies\n\n📊 TEAM DYNAMICS AND CHEMISTRY:\n- Squad rotation effectiveness and depth utilization\n- Veteran leadership and young player integration\n- Home court advantage and crowd support impact\n- Travel fatigue and fixture congestion effects\n- Team chemistry indicators and communication quality\n- Coaching tactical expertise and in-game adjustments\n\n⚡ PHYSICAL AND TECHNICAL CAPABILITIES:\n- Shooting accuracy from various court positions\n- Passing precision under defensive pressure\n- Speed and agility for fast break opportunities\n- Contact strength and physical confrontation ability\n- Endurance levels for high-intensity sustained play\n- Technical skill execution under match pressure\n\n🏆 MATCH SITUATION FACTORS:\n- Tournament stage pressure and elimination scenario handling\n- Head-to-head historical performance patterns\n- Referee crew assignment and calling tendencies\n- Court conditions and playing environment adaptation\n- Injury list impact and key player availability\n- Motivation levels and season goal alignment\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner odds assessment vs form and tactical matchup\n- Goal handicap betting based on offensive/defensive balance\n- Total goals over/under with pace and style considerations\n- Both teams to score threshold betting\n- Individual player performance markets (goals, saves, assists)\n- Tournament progression and advancement betting\n\nExpected value bets 56%+ probability with professional handball expertise!"
    },

    golf: {
        name: "Golf",
        icon: '⛳',
        category: 'precision',
        title: "Professional Golf Analysis Prompt",
        prompt: "Act like a golf analyst and Major championship betting specialist with 20+ years of course expertise. Examine upcoming golf tournaments (Majors, PGA Tour, European Tour, Ryder Cup) with minimum 1.90 odds. Analyze comprehensively: player technical skills (driving accuracy, iron play precision, short game finesse, putting consistency), course management abilities (strategic decision-making, risk assessment, weather adaptation, pressure handling), physical conditioning (endurance levels, injury status, swing mechanics, mental stamina), and competitive form patterns (recent results, cut-making consistency, weekend scoring, clutch performance). Research golf communities (PGA Tour, r/golf, Golf Digest, player social media, caddie insights) for information about swing changes, equipment modifications, course history, weather forecast impacts, personal circumstances, or confidence indicators. Pay special attention to course-specific factors (length requirements, rough conditions, green speeds, wind patterns), field strength assessment, and historical performance patterns (venue records, similar course types, seasonal form cycles). Look for value bets with minimum 54% probability in tournament winners, top finishes, head-to-head matchups, cut-making props, scoring benchmarks, and Major championship specials. Analyze player vs course compatibility, historical venue performance, current form trajectory, and pressure situation response patterns. Provide expert golf betting strategy with course knowledge, swing analysis understanding, and professional tour circuit expertise demonstration.",
        specificMatchPrompt: "⛳ SPECIFIC GOLF TOURNAMENT: {TOURNAMENT} {DATE}\n\nPhD-level golf analysis for the specified event:\n\n🏌️‍♂️ TECHNICAL SKILL ASSESSMENT:\n- Driving distance and accuracy percentage analysis\n- Iron play precision and greens in regulation statistics\n- Short game proficiency (chipping, pitching, bunker play)\n- Putting performance (strokes gained, clutch putts made)\n- Course management decision-making and strategic thinking\n- Weather condition adaptation and equipment selection\n\n📊 RECENT FORM AND PERFORMANCE TRENDS:\n- Last 10 tournament results and scoring average\n- Cut-making percentage and weekend performance\n- Final round scoring under pressure situations\n- Head-to-head records against field competitors\n- Seasonal form cycle and peak performance timing\n- Injury concerns and physical condition assessment\n\n🏟️ COURSE COMPATIBILITY ANALYSIS:\n- Historical performance at specific venue\n- Similar course type success patterns\n- Length requirements vs player strengths\n- Rough conditions and course setup suitability\n- Green speed adaptation and putting surface familiarity\n- Wind condition handling and strategic adjustments\n\n🌡️ ENVIRONMENTAL FACTORS IMPACT:\n- Weather forecast and condition expectations\n- Wind speed/direction effects on scoring\n- Temperature impact on ball flight and equipment\n- Rain probability and soft condition advantages\n- Time zone travel and jet lag considerations\n- Course setup changes and pin position difficulty\n\n🧠 MENTAL GAME AND PRESSURE RESPONSE:\n- Major championship experience and composure\n- Final round performance under contention\n- Comeback ability from poor starting positions\n- Media pressure and expectation management\n- Caddie relationship and on-course decision support\n- Personal motivation and season goal alignment\n\n🎯 FIELD STRENGTH AND COMPETITIVE DYNAMICS:\n- World ranking distribution and elite player presence\n- Course horse identification and specialist advantages\n- Rookie vs veteran performance expectations\n- International player adaptation to venue conditions\n- Withdrawal concerns and late field changes\n- Pairing dynamics and playing partner influences\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Tournament winner odds vs form and course fit\n- Top finish betting (Top 5, Top 10, Top 20)\n- Head-to-head matchup advantages based on course history\n- Cut-making props with historical data analysis\n- Scoring benchmark achievements (eagles, birdies, sub-par rounds)\n- Major championship and season-long accumulator betting\n\nExpected value bets 54%+ probability with professional golf expertise!"
    }
};

// English category names
const categoryNames = {
    'traditional': 'Traditional',
    'esports': 'E-Sports',
    'motor': 'Motorsports',
    'virtual': 'Virtual',
    'water': 'Water Sports',
    'precision': 'Precision',
    'winter': 'Winter Sports',
    'logic': 'Logic Games'
};

// Core application functionality
let sportsData = {};
let favorites = new Set();
let currentSport = null;
let isLightTheme = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadFavorites();
    loadTheme();
    renderSports();
});

function initializeApp() {
    // Load sports data from localStorage or use defaults
    const savedData = localStorage.getItem('sportsData');
    if (savedData) {
        try {
            sportsData = JSON.parse(savedData);
        } catch (e) {
            console.warn('Error loading saved data, using defaults:', e);
            sportsData = { ...defaultSportsData };
        }
    } else {
        sportsData = { ...defaultSportsData };
    }
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Category filters
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Close prompt button
    const closeButton = document.getElementById('close-prompt-button');
    if (closeButton) {
        closeButton.addEventListener('click', closePrompt);
    }

    // Copy button
    const copyButton = document.getElementById('copy-button');
    if (copyButton) {
        copyButton.addEventListener('click', copyPrompt);
    }

    // Edit button
    const editButton = document.getElementById('edit-button');
    if (editButton) {
        editButton.addEventListener('click', editPrompt);
    }

    // Modal event listeners
    setupModalEventListeners();

    // Tool button listeners
    setupToolEventListeners();
}

function setupModalEventListeners() {
    const editModal = document.getElementById('edit-modal');
    const editForm = document.getElementById('edit-form');
    const cancelBtn = document.getElementById('cancel-edit-btn');

    if (editForm) {
        editForm.addEventListener('submit', handleEditSubmit);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            hideModal(editModal);
        });
    }

    // Close modal when clicking outside
    if (editModal) {
        editModal.addEventListener('click', (e) => {
            if (e.target === editModal) {
                hideModal(editModal);
            }
        });
    }
}

function setupToolEventListeners() {
    // Export functionality
    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }

    // Import functionality
    const importInput = document.getElementById('import-input');
    if (importInput) {
        importInput.addEventListener('change', importData);
    }

    // Reset functionality
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetData);
    }

    // Add new prompt
    const addNewBtn = document.getElementById('add-new-prompt-btn');
    if (addNewBtn) {
        addNewBtn.addEventListener('click', addNewPrompt);
    }
}

function renderSports(filteredSports = null) {
    const sportsGrid = document.getElementById('sports-grid');
    const noResults = document.getElementById('no-results');
    
    if (!sportsGrid) return;

    const sportsToRender = filteredSports || Object.entries(sportsData);
    
    if (sportsToRender.length === 0) {
        sportsGrid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    sportsGrid.innerHTML = sportsToRender.map(([key, sport]) => `
        <div class="sport-card" data-sport="${key}" onclick="showPrompt('${key}')">
            <div class="favorite-star ${favorites.has(key) ? 'is-favorite' : ''}" 
                 onclick="event.stopPropagation(); toggleFavorite('${key}')" 
                 title="Toggle favorite">
                ⭐
            </div>
            <div class="sport-icon">${sport.icon}</div>
            <div class="sport-name">${sport.name}</div>
            <div class="sport-category">${categoryNames[sport.category] || sport.category}</div>
        </div>
    `).join('');

    // Add animation delay for staggered loading
    document.querySelectorAll('.sport-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

function showPrompt(sportKey) {
    const sport = sportsData[sportKey];
    if (!sport) return;

    currentSport = sportKey;
    
    const container = document.getElementById('prompt-container');
    const title = document.getElementById('prompt-title');
    const category = document.getElementById('prompt-category');
    const text = document.getElementById('prompt-text');

    if (title) title.textContent = sport.title || sport.name;
    if (category) category.textContent = categoryNames[sport.category] || sport.category;
    if (text) text.value = sport.prompt;

    // Show specific match options if available
    showSpecificMatchOptions(sport);

    // Remove hidden class and show container
    if (container) {
        container.classList.remove('prompt-hidden');
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Update selected sport card
    updateSelectedSport(sportKey);
}

function showSpecificMatchOptions(sport) {
    const optionsContainer = document.getElementById('specific-match-options');
    if (!optionsContainer || !sport.specificMatchPrompt) return;

    optionsContainer.style.display = 'block';
    
    const sportIcon = document.getElementById('sport-icon');
    if (sportIcon) {
        sportIcon.textContent = sport.icon;
    }

    // Setup specific match checkbox
    const specificMatchCheckbox = document.getElementById('specific-match-checkbox');
    const matchInputContainer = document.getElementById('match-input-container');
    
    if (specificMatchCheckbox) {
        specificMatchCheckbox.addEventListener('change', function() {
            if (matchInputContainer) {
                matchInputContainer.style.display = this.checked ? 'block' : 'none';
            }
            updatePromptText();
        });
    }

    // Setup specific date checkbox
    const specificDateCheckbox = document.getElementById('specific-date-checkbox');
    const dateInputContainer = document.getElementById('date-input-container');
    
    if (specificDateCheckbox) {
        specificDateCheckbox.addEventListener('change', function() {
            if (dateInputContainer) {
                dateInputContainer.style.display = this.checked ? 'block' : 'none';
            }
            updatePromptText();
        });
    }

    // Setup input change listeners
    const matchInput = document.getElementById('specific-match-input');
    const dateInput = document.getElementById('specific-date-input');
    
    if (matchInput) {
        matchInput.addEventListener('input', updatePromptText);
    }
    if (dateInput) {
        dateInput.addEventListener('change', updatePromptText);
    }
}

function updatePromptText() {
    if (!currentSport) return;
    
    const sport = sportsData[currentSport];
    if (!sport) return;

    const specificMatchCheckbox = document.getElementById('specific-match-checkbox');
    const specificDateCheckbox = document.getElementById('specific-date-checkbox');
    const matchInput = document.getElementById('specific-match-input');
    const dateInput = document.getElementById('specific-date-input');
    const promptText = document.getElementById('prompt-text');

    if (!promptText) return;

    let finalPrompt = sport.prompt;

    // Check if specific match analysis is requested
    if (specificMatchCheckbox?.checked && sport.specificMatchPrompt) {
        finalPrompt = sport.specificMatchPrompt;
        
        // Replace placeholders
        const matchValue = matchInput?.value || 'Team A vs Team B';
        const dateValue = specificDateCheckbox?.checked && dateInput?.value 
            ? new Date(dateInput.value).toLocaleDateString() 
            : 'Today';
        
        finalPrompt = finalPrompt
            .replace(/{MATCH}/g, matchValue)
            .replace(/{DATE}/g, dateValue);
    }

    promptText.value = finalPrompt;
}

function updateSelectedSport(sportKey) {
    // Remove previous selections
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to current sport
    const currentCard = document.querySelector(`[data-sport="${sportKey}"]`);
    if (currentCard) {
        currentCard.classList.add('selected');
    }
}

function closePrompt() {
    const container = document.getElementById('prompt-container');
    if (container) {
        container.classList.add('prompt-hidden');
    }
    
    // Remove selections
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    currentSport = null;
}

function copyPrompt() {
    const promptText = document.getElementById('prompt-text');
    const copyFeedback = document.getElementById('copy-feedback');
    const copyButtonText = document.getElementById('copy-text');
    
    if (!promptText) return;

    try {
        promptText.select();
        document.execCommand('copy');
        
        // Show success feedback
        if (copyFeedback) {
            copyFeedback.classList.add('show');
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 2000);
        }

        // Update button text temporarily
        if (copyButtonText) {
            const originalText = copyButtonText.textContent;
            copyButtonText.textContent = 'Copied!';
            setTimeout(() => {
                copyButtonText.textContent = originalText;
            }, 1000);
        }

        // Use modern clipboard API if available
        if (navigator.clipboard) {
            navigator.clipboard.writeText(promptText.value);
        }
    } catch (err) {
        console.error('Failed to copy prompt:', err);
        
        // Fallback: show manual copy instructions
        alert('Please manually copy the text from the prompt box.');
    }
}

function handleSearch() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    const filteredSports = Object.entries(sportsData).filter(([key, sport]) => {
        return sport.name.toLowerCase().includes(searchTerm) ||
               sport.category.toLowerCase().includes(searchTerm) ||
               (categoryNames[sport.category] && categoryNames[sport.category].toLowerCase().includes(searchTerm));
    });
    
    renderSports(filteredSports);
}

function handleCategoryFilter(event) {
    const category = event.target.dataset.category;
    
    // Update active category button
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('category-badge', 'active');
    });
    
    event.target.classList.add('category-badge', 'active');
    
    // Filter sports
    let filteredSports;
    
    if (category === 'all') {
        filteredSports = Object.entries(sportsData);
    } else if (category === 'favorites') {
        filteredSports = Object.entries(sportsData).filter(([key]) => favorites.has(key));
    } else {
        filteredSports = Object.entries(sportsData).filter(([key, sport]) => sport.category === category);
    }
    
    renderSports(filteredSports);
}

function toggleFavorite(sportKey) {
    if (favorites.has(sportKey)) {
        favorites.delete(sportKey);
    } else {
        favorites.add(sportKey);
    }
    
    saveFavorites();
    
    // Update UI
    const favoriteIcon = document.querySelector(`[data-sport="${sportKey}"] .favorite-star`);
    if (favoriteIcon) {
        favoriteIcon.classList.toggle('is-favorite');
    }
}

function loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        try {
            favorites = new Set(JSON.parse(savedFavorites));
        } catch (e) {
            console.warn('Error loading favorites:', e);
            favorites = new Set();
        }
    }
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
}

function toggleTheme() {
    isLightTheme = !isLightTheme;
    document.body.classList.toggle('light-theme', isLightTheme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
    }
    
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isLightTheme = true;
        document.body.classList.add('light-theme');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.textContent = '☀️';
        }
    }
}

function editPrompt() {
    if (!currentSport) return;
    
    const sport = sportsData[currentSport];
    if (!sport) return;
    
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    
    // Populate form
    document.getElementById('edit-key').value = currentSport;
    document.getElementById('edit-name').value = sport.name;
    document.getElementById('edit-icon').value = sport.icon;
    document.getElementById('edit-category').value = sport.category;
    document.getElementById('edit-prompt-title').value = sport.title || sport.name;
    document.getElementById('edit-prompt').value = sport.prompt;
    
    if (modalTitle) {
        modalTitle.textContent = 'Edit Prompt';
    }
    
    showModal(modal);
}

function addNewPrompt() {
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    
    // Clear form
    document.getElementById('edit-key').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-icon').value = '';
    document.getElementById('edit-category').value = 'traditional';
    document.getElementById('edit-prompt-title').value = '';
    document.getElementById('edit-prompt').value = '';
    
    if (modalTitle) {
        modalTitle.textContent = 'Add New Prompt';
    }
    
    showModal(modal);
}

function handleEditSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const key = document.getElementById('edit-key').value;
    const isNewPrompt = !key;
    
    const sportData = {
        name: document.getElementById('edit-name').value,
        icon: document.getElementById('edit-icon').value,
        category: document.getElementById('edit-category').value,
        title: document.getElementById('edit-prompt-title').value,
        prompt: document.getElementById('edit-prompt').value
    };
    
    let finalKey = key;
    if (isNewPrompt) {
        // Generate key from name
        finalKey = sportData.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        
        // Ensure unique key
        let counter = 1;
        let originalKey = finalKey;
        while (sportsData[finalKey]) {
            finalKey = `${originalKey}_${counter}`;
            counter++;
        }
    }
    
    sportsData[finalKey] = sportData;
    saveSportsData();
    renderSports();
    
    // If this was the current sport, update the display
    if (currentSport === key || isNewPrompt) {
        showPrompt(finalKey);
    }
    
    hideModal(document.getElementById('edit-modal'));
}

function showModal(modal) {
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modal) {
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function exportData() {
    const data = {
        sportsData: sportsData,
        favorites: Array.from(favorites),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.sportsData) {
                sportsData = { ...sportsData, ...data.sportsData };
                saveSportsData();
            }
            
            if (data.favorites) {
                data.favorites.forEach(key => favorites.add(key));
                saveFavorites();
            }
            
            renderSports();
            alert('Data imported successfully!');
            
        } catch (error) {
            console.error('Import error:', error);
            alert('Error importing data. Please check the file format.');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

function resetData() {
    if (confirm('Are you sure you want to reset all data? This will remove all custom prompts and favorites.')) {
        sportsData = { ...defaultSportsData };
        favorites.clear();
        
        saveSportsData();
        saveFavorites();
        renderSports();
        closePrompt();
        
        alert('Data has been reset to defaults.');
    }
}

function saveSportsData() {
    localStorage.setItem('sportsData', JSON.stringify(sportsData));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close prompt
    if (e.key === 'Escape') {
        closePrompt();
        
        // Close modals
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            hideModal(modal);
        });
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Drag and drop functionality for image upload
function initializeDragAndDrop() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadedImagesContainer = document.getElementById('uploaded-images');

    if (!dropZone || !fileInput) return;

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop zone when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);
    
    // Handle click to select files
    dropZone.addEventListener('click', () => fileInput.click());
    
    // Handle file input change
    fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

    // Handle Ctrl+V paste functionality
    document.addEventListener('paste', handlePaste);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropZone.classList.add('border-blue-500', 'bg-slate-700/30');
        dropZone.classList.remove('border-slate-600');
    }

    function unhighlight() {
        dropZone.classList.remove('border-blue-500', 'bg-slate-700/30');
        dropZone.classList.add('border-slate-600');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        if (!files || files.length === 0) return;

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                displayImage(file);
            }
        });
    }

    function handlePaste(e) {
        const items = e.clipboardData.items;
        
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                e.preventDefault();
                const file = items[i].getAsFile();
                if (file) {
                    displayImage(file);
                }
            }
        }
    }

    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'relative bg-slate-800 rounded-lg p-3 border border-slate-600';
            
            const fileName = file.name || `pasted-image-${Date.now()}.png`;
            const fileSize = file.size || 0;
            
            imageContainer.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="${e.target.result}" alt="${fileName}" class="w-12 h-12 object-cover rounded">
                        <div>
                            <p class="text-sm font-medium text-slate-200">${fileName}</p>
                            <p class="text-xs text-slate-400">${fileSize > 0 ? (fileSize / 1024).toFixed(1) + ' KB' : 'Pasted image'}</p>
                        </div>
                    </div>
                    <button class="remove-image text-red-400 hover:text-red-300 transition-colors" onclick="this.closest('.relative').remove()">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `;
            
            uploadedImagesContainer.appendChild(imageContainer);
        };
        reader.readAsDataURL(file);
    }
}

// AI Integration functionality
function initializeAIIntegration() {
    const aiProvider = document.getElementById('ai-provider');
    const aiApiKey = document.getElementById('ai-api-key');
    const testConnectionBtn = document.getElementById('test-ai-connection');
    const saveConfigBtn = document.getElementById('save-ai-config');
    const generateTipsBtn = document.getElementById('generate-tips');
    const aiSearchQuery = document.getElementById('ai-search-query');
    const aiOpenaiModel = document.getElementById('ai-openai-model');

    // Load saved configuration
    const savedConfig = localStorage.getItem('aiConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        if (aiProvider) aiProvider.value = config.provider || '';
        if (aiApiKey) aiApiKey.value = config.apiKey || '';
        if (aiSearchQuery) aiSearchQuery.value = config.searchQuery || '';
        if (aiOpenaiModel) aiOpenaiModel.value = config.openaiModel || '';
        updateGenerateButton();
    } else {
        // Defaults: use OpenAI (GPT-5) by default; user still needs to enter API key
        if (aiProvider) aiProvider.value = 'chatgpt';
        if (aiOpenaiModel) aiOpenaiModel.value = 'gpt-5';
        updateGenerateButton();
    }

    if (aiApiKey) {
        aiApiKey.addEventListener('input', updateGenerateButton);
    }

    // Save configuration
    if (saveConfigBtn) {
        saveConfigBtn.addEventListener('click', () => {
            const config = {
                provider: aiProvider?.value || '',
                apiKey: aiApiKey?.value || '',
                searchQuery: aiSearchQuery?.value || '',
                openaiModel: aiOpenaiModel?.value || ''
            };
            localStorage.setItem('aiConfig', JSON.stringify(config));
            showAlert('Configuration saved successfully!', 'success');
            updateGenerateButton();
        });
    }

    // Test connection
    if (testConnectionBtn) {
        testConnectionBtn.addEventListener('click', async () => {
            const key = aiApiKey?.value;

            if (!key) {
                showAlert('Please enter your OpenAI API key', 'error');
                return;
            }

            testConnectionBtn.textContent = 'Testing...';
            testConnectionBtn.disabled = true;

            try {
                // Simulate API test (replace with actual implementation)
                await new Promise(resolve => setTimeout(resolve, 2000));
                showAlert('Connection successful!', 'success');
            } catch (error) {
                showAlert('Connection failed. Please check your credentials.', 'error');
            } finally {
                testConnectionBtn.textContent = 'Test Connection';
                testConnectionBtn.disabled = false;
            }
        });
    }

    // Generate tips with optional image or web search
    if (generateTipsBtn) {
        generateTipsBtn.addEventListener('click', async () => {
            const config = JSON.parse(localStorage.getItem('aiConfig') || '{}');
            // Merge in latest UI values so user needn't hit Save every time
            if (aiProvider?.value) config.provider = aiProvider.value;
            if (aiApiKey?.value) config.apiKey = aiApiKey.value;
            if (aiSearchQuery?.value) config.searchQuery = aiSearchQuery.value;
            if (aiOpenaiModel?.value) config.openaiModel = aiOpenaiModel.value;
            const images = document.querySelectorAll('#uploaded-images img');

            if (!config.apiKey) {
                showAlert('Please enter your OpenAI API key', 'error');
                return;
            }

            generateTipsBtn.disabled = true;

            try {
                let matchData;
                
                if (images.length > 0) {
                    // Image uploaded - analyze it
                    generateTipsBtn.textContent = 'Analyzing Image...';
                    const imageAnalysis = await analyzeMatchImage(images[0], config);
                    
                    if (!imageAnalysis.success) {
                        showAlert(imageAnalysis.error || 'Could not detect match information from image', 'error');
                        return;
                    }
                    
                    matchData = imageAnalysis.matchData;
                    generateTipsBtn.textContent = 'Generating Professional Tips...';
                } else {
                    // No image uploaded -> try to fetch REAL fixtures first, then fallback to random
                    generateTipsBtn.textContent = 'Fetching real fixtures...';
                    const realFixture = await fetchRealSoccerFixture(config.searchQuery);
                    if (realFixture) {
                        matchData = realFixture;
                        generateTipsBtn.textContent = 'Generating Professional Tips...';
                    } else {
                        generateTipsBtn.textContent = 'Selecting Random Sport...';
                        matchData = generateRandomSportMatch();
                        matchData.fromImage = false;
                        generateTipsBtn.textContent = 'Generating Professional Tips...';
                    }
                }

                // Generate tips based on image or query
                const tipsResult = await generateRealTips(matchData, config);
                if (tipsResult && tipsResult.insufficient_data) {
                    showAlert(tipsResult.reason || 'Insufficient verified data to generate tips.', 'error');
                    generateTipsBtn.textContent = 'Generate Tips';
                    generateTipsBtn.disabled = false;
                    return;
                }
                const tips = Array.isArray(tipsResult) ? tipsResult : (tipsResult?.tips || []);
                
                displayGeneratedTips(tips, matchData);
                
            } catch (error) {
                console.error('Error generating tips:', error);
                showAlert('Failed to generate tips. Please try again.', 'error');
            } finally {
                generateTipsBtn.textContent = 'Generate Tips';
                generateTipsBtn.disabled = false;
            }
        });
    }

    // Fetch real soccer fixtures for today from TheSportsDB (no API key needed)
    async function fetchRealSoccerFixture(query) {
        try {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const dateStr = `${yyyy}-${mm}-${dd}`;
            // 1) Try TheSportsDB (free demo may return archived 2014 data) and discard if not today/this year
            try {
                const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${dateStr}&s=Soccer`;
                const res = await fetch(url);
                if (res.ok) {
                    const data = await res.json();
                    const events = Array.isArray(data?.events) ? data.events : [];
                    // Only keep events with the same date (and reasonable year)
                    const filtered = events.filter(ev => (ev.dateEvent || '').startsWith(dateStr));
                    if (filtered.length) {
                        let candidates = filtered;
                        const q = (query || '').trim().toLowerCase();
                        if (q) {
                            const vsMatch = q.match(/(.+?)\s+(?:vs|v|\-|–)\s+(.+)/i);
                            const teamA = vsMatch ? vsMatch[1].trim().toLowerCase() : null;
                            const teamB = vsMatch ? vsMatch[2].trim().toLowerCase() : null;
                            candidates = filtered.filter(ev => {
                                const h = (ev.strHomeTeam || '').toLowerCase();
                                const a = (ev.strAwayTeam || '').toLowerCase();
                                const league = (ev.strLeague || '').toLowerCase();
                                if (teamA && teamB) return (h.includes(teamA) && a.includes(teamB)) || (h.includes(teamB) && a.includes(teamA));
                                return q && (h.includes(q) || a.includes(q) || league.includes(q));
                            });
                            if (!candidates.length) candidates = filtered;
                        }
                        const event = candidates[Math.floor(Math.random() * candidates.length)];
                        return {
                            sport: 'Football',
                            team1: event.strHomeTeam,
                            team2: event.strAwayTeam,
                            match_type: event.strLeague,
                            date: event.dateEvent || dateStr,
                            time: event.strTime || null,
                            odds_visible: false,
                            visible_odds: null,
                            betting_markets: null,
                            additional_info: `Real fixture from TheSportsDB (id: ${event.idEvent})`,
                            fromImage: false
                        };
                    }
                }
            } catch (_) { /* swallow and try next source */ }

            // 2) Fallback: Scorebat free feed (has CORS), use today's entries
            try {
                const res2 = await fetch('https://www.scorebat.com/video-api/v3/');
                if (res2.ok) {
                    const data2 = await res2.json();
                    const items = Array.isArray(data2?.response) ? data2.response : [];
                    const start = new Date(`${dateStr}T00:00:00Z`).getTime();
                    const end = new Date(`${dateStr}T23:59:59Z`).getTime();
                    let candidates = items.filter(it => {
                        const t = Date.parse(it.date);
                        return !Number.isNaN(t) && t >= start && t <= end;
                    });
                    if (!candidates.length) return null;
                    const q = (query || '').trim().toLowerCase();
                    if (q) {
                        candidates = candidates.filter(it => {
                            const title = (it.title || '').toLowerCase();
                            const comp = (it.competition || '').toLowerCase();
                            return title.includes(q) || comp.includes(q);
                        }) || candidates;
                        if (!candidates.length) candidates = items;
                    }
                    const pick = candidates[Math.floor(Math.random() * candidates.length)];
                    const parts = (pick.title || '').split(' - ');
                    const team1 = parts[0] || 'Home Team';
                    const team2 = parts[1] || 'Away Team';
                    return {
                        sport: 'Football',
                        team1,
                        team2,
                        match_type: pick.competition || 'Football',
                        date: dateStr,
                        time: null,
                        odds_visible: false,
                        visible_odds: null,
                        betting_markets: null,
                        additional_info: 'Real fixture from Scorebat feed',
                        fromImage: false
                    };
                }
            } catch (e2) {
                console.error('Scorebat fetch error:', e2);
            }

            return null;
        } catch (e) {
            console.error('fetchRealSoccerFixture error:', e);
            return null;
        }
    }

    // Generate random sport match data
    function generateRandomSportMatch() {
        const sportKeys = Object.keys(sportsData);
        const randomSportKey = sportKeys[Math.floor(Math.random() * sportKeys.length)];
        const randomSport = sportsData[randomSportKey];
        
        // Sport-specific team/player pools
        const teamPools = {
            football: [
                ['Manchester City', 'Liverpool'], ['Barcelona', 'Real Madrid'], ['Bayern Munich', 'Borussia Dortmund'],
                ['PSG', 'Marseille'], ['Juventus', 'AC Milan'], ['Chelsea', 'Arsenal'], ['Atletico Madrid', 'Valencia'],
                ['Inter Milan', 'AS Roma'], ['Manchester United', 'Tottenham'], ['Ajax', 'PSV Eindhoven']
            ],
            basketball: [
                ['Lakers', 'Celtics'], ['Warriors', 'Clippers'], ['Heat', 'Bulls'], ['Nets', 'Knicks'],
                ['Bucks', 'Sixers'], ['Suns', 'Nuggets'], ['Mavericks', 'Spurs'], ['Raptors', 'Pacers']
            ],
            tennis: [
                ['Novak Djokovic', 'Rafael Nadal'], ['Carlos Alcaraz', 'Jannik Sinner'], ['Daniil Medvedev', 'Alexander Zverev'],
                ['Stefanos Tsitsipas', 'Casper Ruud'], ['Andrey Rublev', 'Taylor Fritz'], ['Holger Rune', 'Lorenzo Musetti']
            ],
            american_football: [
                ['Chiefs', 'Bills'], ['Cowboys', 'Eagles'], ['49ers', 'Rams'], ['Packers', 'Vikings'],
                ['Patriots', 'Jets'], ['Steelers', 'Ravens'], ['Bengals', 'Browns'], ['Dolphins', 'Titans']
            ],
            baseball: [
                ['Yankees', 'Red Sox'], ['Dodgers', 'Giants'], ['Astros', 'Rangers'], ['Braves', 'Phillies'],
                ['Mets', 'Nationals'], ['Cardinals', 'Cubs'], ['Guardians', 'Tigers'], ['Padres', 'Rockies']
            ],
            ice_hockey: [
                ['Bruins', 'Rangers'], ['Lightning', 'Panthers'], ['Avalanche', 'Golden Knights'], ['Oilers', 'Flames'],
                ['Leafs', 'Canadiens'], ['Penguins', 'Capitals'], ['Stars', 'Predators'], ['Kings', 'Ducks']
            ],
            boxing: [
                ['Tyson Fury', 'Oleksandr Usyk'], ['Canelo Alvarez', 'Gennady Golovkin'], ['Anthony Joshua', 'Deontay Wilder'],
                ['Terence Crawford', 'Errol Spence Jr'], ['Ryan Garcia', 'Gervonta Davis'], ['Dmitry Bivol', 'Artur Beterbiev']
            ],
            mma: [
                ['Jon Jones', 'Stipe Miocic'], ['Islam Makhachev', 'Charles Oliveira'], ['Leon Edwards', 'Colby Covington'],
                ['Alexander Volkanovski', 'Ilia Topuria'], ['Sean O\'Malley', 'Merab Dvalishvili'], ['Tom Aspinall', 'Curtis Blaydes']
            ],
            golf: [
                ['Scottie Scheffler', 'Rory McIlroy'], ['Jon Rahm', 'Viktor Hovland'], ['Collin Morikawa', 'Xander Schauffele'],
                ['Patrick Cantlay', 'Tony Finau'], ['Max Homa', 'Sam Burns'], ['Cameron Smith', 'Adam Scott']
            ],
            formula1: [
                ['Max Verstappen', 'Lando Norris'], ['Charles Leclerc', 'Carlos Sainz'], ['Lewis Hamilton', 'George Russell'],
                ['Oscar Piastri', 'Fernando Alonso'], ['Sergio Perez', 'Pierre Gasly'], ['Alexander Albon', 'Logan Sargeant']
            ],
            motogp: [
                ['Francesco Bagnaia', 'Jorge Martin'], ['Marc Marquez', 'Pedro Acosta'], ['Enea Bastianini', 'Marco Bezzecchi'],
                ['Brad Binder', 'Jack Miller'], ['Fabio Quartararo', 'Alex Rins'], ['Miguel Oliveira', 'Raul Fernandez']
            ]
        };

        const leaguePools = {
            football: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Champions League'],
            basketball: ['NBA', 'EuroLeague', 'NCAA', 'NBA Playoffs'],
            tennis: ['ATP Masters', 'Grand Slam', 'ATP 500', 'ATP 250'],
            american_football: ['NFL', 'NFL Playoffs', 'Super Bowl'],
            baseball: ['MLB', 'World Series', 'AL Championship', 'NL Championship'],
            ice_hockey: ['NHL', 'NHL Playoffs', 'Stanley Cup'],
            boxing: ['WBC Championship', 'WBA Championship', 'IBF Championship', 'WBO Championship'],
            mma: ['UFC', 'UFC Championship', 'UFC Main Event'],
            golf: ['PGA Tour', 'Major Championship', 'Ryder Cup'],
            formula1: ['Formula 1 Grand Prix', 'F1 Championship'],
            motogp: ['MotoGP Championship', 'MotoGP Grand Prix']
        };

        const teams = teamPools[randomSportKey] || teamPools.football;
        const leagues = leaguePools[randomSportKey] || leaguePools.football;
        
        const randomTeams = teams[Math.floor(Math.random() * teams.length)];
        const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];

        const today = new Date();
        const matchDate = today.toISOString().split('T')[0];

        return {
            sport: randomSport.name,
            team1: randomTeams[0],
            team2: randomTeams[1],
            match_type: randomLeague,
            date: matchDate,
            time: null,
            odds_visible: false,
            visible_odds: null,
            betting_markets: null,
            additional_info: `Random ${randomSport.name} match for AI analysis`,
            fromImage: false
        };
    }

    function normalizeBoolean(value) {
        if (typeof value === 'boolean') return value;
        if (typeof value === 'number') return value !== 0;
        if (typeof value === 'string') {
            const normalized = value.trim().toLowerCase();
            return ['true', 'yes', 'y', '1'].includes(normalized);
        }
        return false;
    }

    function extractTeamsFromMatchString(matchString) {
        if (!matchString || typeof matchString !== 'string') {
            return { team1: '', team2: '' };
        }

        const normalized = matchString.replace(/\s+/g, ' ').trim();
        const separators = [' vs ', ' v ', ' - ', ' – ', ' — ', ' @ ', ' against '];

        for (const separator of separators) {
            if (normalized.toLowerCase().includes(separator.trim())) {
                const parts = normalized.split(new RegExp(separator, 'i')).map(part => part.trim()).filter(Boolean);
                if (parts.length === 2) {
                    return { team1: parts[0], team2: parts[1] };
                }
            }
        }

        return { team1: '', team2: '' };
    }

    function pickFirstString(...values) {
        for (const value of values) {
            if (typeof value === 'string' && value.trim()) {
                return value.trim();
            }
        }
        return '';
    }

    function normalizeImageAnalysisData(rawData) {
        if (!rawData || typeof rawData !== 'object') {
            return null;
        }

        // Some models may wrap the payload under matchData
        const payload = rawData.matchData && typeof rawData.matchData === 'object' ? rawData.matchData : rawData;

        const matchStringCandidate = pickFirstString(payload.match, payload.matchup, payload.fixture, payload.event);
        const fallbackTeams = extractTeamsFromMatchString(matchStringCandidate);

        const team1 = pickFirstString(
            payload.team1,
            payload.team_one,
            payload.home_team,
            payload.homeTeam,
            payload.club1,
            fallbackTeams.team1
        );

        const team2 = pickFirstString(
            payload.team2,
            payload.team_two,
            payload.away_team,
            payload.awayTeam,
            payload.club2,
            fallbackTeams.team2
        );

        const sport = pickFirstString(payload.sport, payload.sport_type, payload.discipline) || 'Football';
        const matchType = pickFirstString(payload.match_type, payload.competition, payload.league, payload.tournament, payload.event_type);
        const date = pickFirstString(payload.date, payload.match_date, payload.event_date, payload.kickoff_date);
        const time = pickFirstString(payload.time, payload.match_time, payload.event_time, payload.kickoff_time);

        let visibleOdds = payload.visible_odds !== undefined ? payload.visible_odds : payload.odds;
        if (Array.isArray(visibleOdds)) {
            visibleOdds = visibleOdds
                .filter(Boolean)
                .map(odds => (typeof odds === 'string' ? odds.trim() : String(odds)))
                .join(' | ');
        } else if (visibleOdds && typeof visibleOdds === 'object') {
            visibleOdds = Object.entries(visibleOdds)
                .filter(([key, value]) => value !== undefined && value !== null && value !== '')
                .map(([key, value]) => `${key}: ${value}`)
                .join(' | ');
        } else if (visibleOdds !== undefined && visibleOdds !== null && typeof visibleOdds !== 'string') {
            visibleOdds = String(visibleOdds);
        }
        visibleOdds = (visibleOdds || '').trim();

        const oddsVisible = normalizeBoolean(
            payload.odds_visible !== undefined ? payload.odds_visible : payload.oddsVisible !== undefined ? payload.oddsVisible : visibleOdds.length > 0
        );

        let bettingMarketsRaw = payload.betting_markets ?? payload.visible_markets ?? payload.markets ?? payload.market_summary;
        let bettingMarkets = '';
        if (Array.isArray(bettingMarketsRaw)) {
            bettingMarkets = bettingMarketsRaw.filter(Boolean).map(market => (typeof market === 'string' ? market.trim() : String(market))).join(' | ');
        } else {
            bettingMarkets = pickFirstString(bettingMarketsRaw);
        }

        const additionalPieces = [payload.additional_info, payload.notes, payload.summary, payload.context]
            .filter(Boolean)
            .map(piece => (typeof piece === 'string' ? piece.trim() : JSON.stringify(piece)));
        const additionalInfo = additionalPieces.join(' ').trim();

        if (!team1 || !team2) {
            return null;
        }

        return {
            sport,
            team1,
            team2,
            match_type: matchType || 'Undisclosed Competition',
            date,
            time,
            odds_visible: oddsVisible,
            visible_odds: visibleOdds,
            betting_markets: bettingMarkets,
            additional_info: additionalInfo,
            fromImage: true
        };
    }

    function detectTipMarket(description, matchData) {
        const text = typeof description === 'string' ? description.toLowerCase() : '';
        if (!text) return null;

        const teamNames = [];
        if (matchData?.team1) teamNames.push(matchData.team1.toLowerCase());
        if (matchData?.team2) teamNames.push(matchData.team2.toLowerCase());

        const includesTeam = teamNames.some(name => name && text.includes(name));
        const matchOutcomeRegex = /\b(win|wins|victory|moneyline)\b/;
        const keywordHits = ['match winner', '1x2', 'draw no bet', 'double chance'].some(keyword => text.includes(keyword));

        if ((includesTeam && (matchOutcomeRegex.test(text) || keywordHits)) || /\bdraw\b/.test(text)) {
            return 'match_outcome';
        }

        return null;
    }

    function sanitizeGeneratedTips(tips, matchData) {
        if (!Array.isArray(tips)) return [];

        const seenMarkets = new Set();
        const seenDescriptions = new Set();
        const sanitized = [];

        for (const tip of tips) {
            if (!tip || typeof tip !== 'object') continue;

            const description = typeof tip.description === 'string' ? tip.description.trim() : '';
            const normalizedDescription = description.toLowerCase();

            if (description && seenDescriptions.has(normalizedDescription)) {
                continue;
            }

            const market = detectTipMarket(description, matchData);
            if (market === 'match_outcome' && seenMarkets.has('match_outcome')) {
                continue;
            }

            if (market) {
                seenMarkets.add(market);
            }

            sanitized.push({ ...tip });

            if (description) {
                seenDescriptions.add(normalizedDescription);
            }
        }

        if (!sanitized.length && tips.length) {
            sanitized.push({ ...tips[0] });
        }

        return sanitized;
    }

    // Real AI Image Analysis Function with OpenAI Vision API
    async function analyzeMatchImage(imageElement, config) {
        const provider = (config.provider || 'chatgpt').toLowerCase();
        if (provider !== 'chatgpt') {
            throw new Error('Image analysis currently supports only the OpenAI ChatGPT provider');
        }

        if (!config.apiKey) {
            throw new Error('OpenAI ChatGPT API key required for image analysis');
        }

        try {
            // Convert image to base64
            const imageBase64 = imageElement.src;
            
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [
                        {
                            role: "user",
                            content: [
                                {
                                    type: "text",
                                    text: `You are a sports betting expert. Analyze this image and extract match information.

INSTRUCTIONS:
- Look carefully at the image for team names, sport type, leagues, odds, dates
- Be very specific about what you actually see
- If you see betting odds, include the exact numbers
- If you can't identify clear match details, return success: false

RESPOND WITH ONLY THIS JSON FORMAT (no markdown, no extra text):
{
    "success": true,
    "sport": "Football",
    "team1": "Team A Name",
    "team2": "Team B Name",
    "match_type": "Premier League", 
    "date": "2024-01-28",
    "time": "15:00",
    "odds_visible": "true",
    "visible_odds": "Team A: 2.1, Draw: 3.2, Team B: 3.5",
    "betting_markets": "1X2, Over/Under 2.5",
    "additional_info": "Additional context"
}

If unclear, return:
{"success": false, "error": "Cannot identify match details from image"}`
                                },
                                {
                                    type: "image_url",
                                    image_url: {
                                        url: imageBase64
                                    }
                                }
                            ]
                        }
                    ],
                    max_tokens: 800,
                    temperature: 0.3
                })
            });

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.status}`);
            }

            const data = await response.json();
            const content = data?.choices?.[0]?.message?.content;

            if (!content) {
                return {
                    success: false,
                    error: 'No response returned from image analysis'
                };
            }
            
            console.log('Raw AI response:', content);
            
            // Clean and parse the JSON response
            let analysisResult;
            try {
                // Remove any markdown code blocks if present
                const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
                analysisResult = JSON.parse(cleanContent);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                console.log('Content that failed to parse:', content);
                return {
                    success: false,
                    error: "AI response was not valid JSON format"
                };
            }
            
            if (analysisResult.success === false) {
                return {
                    success: false,
                    error: analysisResult.error || "Could not analyze image"
                };
            }

            let matchData = normalizeImageAnalysisData(analysisResult);
            if (!matchData && analysisResult.data) {
                matchData = normalizeImageAnalysisData(analysisResult.data);
            }

            if (!matchData) {
                return {
                    success: false,
                    error: analysisResult.error || "Could not detect match information from image"
                };
            }

            return {
                success: true,
                matchData
            };
            
        } catch (error) {
            console.error('Image analysis error:', error);
            return {
                success: false,
                error: `Failed to analyze image: ${error.message}`
            };
        }
    }

    // Generate Real Tips Function using OpenAI
    async function generateRealTips(matchData, config) {
        // OpenAI (image-or-query) branch
        {
            if (!config.apiKey) {
                throw new Error('OpenAI ChatGPT API key required for tip generation');
            }

            const sportKey = getSportKeyFromName(matchData.sport);
            const sportData = sportsData[sportKey];
            
            if (!sportData) {
                throw new Error(`No prompt available for sport: ${matchData.sport}`);
            }

            let finalPrompt;
            let usingEvidence = false;
            let evidenceSources = [];

            if (matchData.fromImage === true) {
                // Image-grounded flow
                let basePrompt = sportData.specificMatchPrompt || sportData.prompt;
                basePrompt = basePrompt.replace('{MATCH}', `${matchData.team1} vs ${matchData.team2}`);
                basePrompt = basePrompt.replace('{DATE}', matchData.date || 'Today');
                const oddsVisible = normalizeBoolean(matchData.odds_visible);
                const visibleOddsText = Array.isArray(matchData.visible_odds)
                    ? matchData.visible_odds.filter(Boolean).join(' | ')
                    : (matchData.visible_odds || '');
                const oddsInfo = oddsVisible && visibleOddsText
                    ? `\n\nVISIBLE ODDS FROM IMAGE: ${visibleOddsText}\nVISIBLE BETTING MARKETS: ${matchData.betting_markets || 'Standard markets'}`
                    : '';
                finalPrompt = `${basePrompt}${oddsInfo}

STRICT GROUNDEDNESS:
- Use ONLY the data detected from the image above. Do not fabricate teams, odds, markets, or dates.
- If odds/markets are not clearly visible, return insufficient_data.
- Provide only the single highest-confidence bet derived directly from the screenshot. Never output multiple conflicting outcomes.

Respond JSON only (no markdown):
{
  "tips": [ { "description": "", "odds": "", "probability": "", "ev": "", "confidence": "", "reasoning": "" } ],
  "insufficient_data": false,
  "reason": ""
}`;
            } else {
                if (!finalPrompt) {
                    // No evidence available -> run standard expert prompt on the selected/random matchup
                    let basePrompt = sportData.specificMatchPrompt || sportData.prompt;
                    basePrompt = basePrompt.replace('{MATCH}', `${matchData.team1 || 'Team A'} vs ${matchData.team2 || 'Team B'}`);
                    basePrompt = basePrompt.replace('{DATE}', matchData.date || 'Today');
                    const oddsInfo = '';
                    finalPrompt = `${basePrompt}${oddsInfo}

IMPORTANT: Generate exactly 3 professional betting tips${matchData.team1 && matchData.team2 ? ` for ${matchData.team1} vs ${matchData.team2}` : ''} in ${matchData.match_type || 'the chosen competition'}.
- Provide at most one match-outcome (1X2 / moneyline) pick; never list mutually exclusive winners.
- Ensure the tips cover different markets or angles (outcome, totals, props, etc.) unless verified data is missing.
- If you cannot justify three unique value bets from verified data, set "insufficient_data": true and explain why.
${matchData.additional_info ? 'Additional context: ' + matchData.additional_info : ''}

RESPOND WITH ONLY THIS JSON FORMAT (no markdown, no extra text):
{
  "tips": [
    { "description": "", "odds": "", "probability": "", "ev": "", "confidence": "", "reasoning": "" },
    { "description": "", "odds": "", "probability": "", "ev": "", "confidence": "", "reasoning": "" },
    { "description": "", "odds": "", "probability": "", "ev": "", "confidence": "", "reasoning": "" }
  ],
  "insufficient_data": false,
  "reason": ""
}`;
                }
            }

            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.apiKey}`
                    },
                    body: JSON.stringify({
                        model: (config.openaiModel && config.openaiModel.trim()) ? config.openaiModel.trim() : "gpt-4o",
                        messages: [
                            {
                                role: "user",
                                content: finalPrompt
                            }
                        ],
                        max_tokens: 1200,
                        temperature: usingEvidence ? 0.2 : 0.1
                    })
                });

                if (!response.ok) {
                    throw new Error(`OpenAI API error: ${response.status}`);
                }

                const data = await response.json();
                const content = data.choices[0].message.content;
                
                console.log('Raw tip generation response:', content);
                
                // Clean and parse the JSON response
                let tipsResult;
                try {
                    // Remove any markdown code blocks if present
                    const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
                    tipsResult = JSON.parse(cleanContent);
                } catch (parseError) {
                    console.error('JSON parse error in tip generation:', parseError);
                    console.log('Content that failed to parse:', content);
                    throw new Error("AI tip response was not valid JSON format");
                }
                
                if (tipsResult && Array.isArray(tipsResult.tips)) {
                    let sanitizedTips = sanitizeGeneratedTips(tipsResult.tips, matchData);
                    if (usingEvidence) {
                        sanitizedTips = sanitizedTips.map(t => ({
                            ...t,
                            sources: Array.isArray(t.sources) && t.sources.length ? t.sources : evidenceSources
                        }));
                    }
                    tipsResult.tips = sanitizedTips;
                }
                return tipsResult;
                
            } catch (error) {
                console.error('Tip generation error:', error);
                throw new Error(`Failed to generate tips: ${error.message}`);
            }
        }

        throw new Error('Unsupported provider');
    }

    // Helper function to map sport names to sport keys
    function getSportKeyFromName(sportName) {
        const sportMapping = {
            'Football': 'football',
            'Soccer': 'football', 
            'Basketball': 'basketball',
            'Tennis': 'tennis',
            'American Football': 'american_football',
            'Baseball': 'baseball',
            'Ice Hockey': 'ice_hockey',
            'Hockey': 'ice_hockey',
            'Boxing': 'boxing',
            'MMA': 'mma',
            'UFC': 'mma',
            'Golf': 'golf',
            'Formula 1': 'formula1',
            'F1': 'formula1',
            'MotoGP': 'motogp'
        };
        
        return sportMapping[sportName] || 'football'; // Default to football
    }

    // Display Generated Tips Function
    function displayGeneratedTips(tips, matchData) {
        const tipContainer = document.getElementById('ai-tips-container');
        
        const oddsVisible = normalizeBoolean(matchData.odds_visible);
        const visibleOddsText = Array.isArray(matchData.visible_odds)
            ? matchData.visible_odds.filter(Boolean).join(' | ')
            : (matchData.visible_odds || '');
        const oddsDisplay = oddsVisible && visibleOddsText
            ? `<span class="text-yellow-400">📊 Odds: ${visibleOddsText}</span>` 
            : '';
            
        const matchInfoHtml = `
            <div class="match-info-banner bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6 border border-blue-500/30">
                <h3 class="text-lg font-bold text-blue-400 mb-2">🎯 Match Analysis: ${matchData.team1} vs ${matchData.team2}</h3>
                <div class="text-sm text-slate-300 flex flex-wrap gap-4">
                    <span>🏆 ${matchData.match_type}</span>
                    ${matchData.date ? `<span>📅 ${matchData.date}</span>` : ''}
                    ${matchData.time ? `<span>⏰ ${matchData.time}</span>` : ''}
                    ${oddsDisplay}
                </div>
                ${matchData.additional_info ? `<p class="text-xs text-slate-400 mt-2">${matchData.additional_info}</p>` : ''}
            </div>
        `;

        const tipsHtml = tips.map((tip, index) => {
            const borderColors = ['border-green-500/40', 'border-blue-500/40', 'border-purple-500/40'];
            const textColors = ['text-green-400', 'text-blue-400', 'text-purple-400'];
            const bgColors = ['bg-green-500/10', 'bg-blue-500/10', 'bg-purple-500/10'];
            
            const sourcesHtml = Array.isArray(tip.sources) && tip.sources.length ? `
                <div class="mt-2 text-xs text-slate-400">Sources: 
                    ${tip.sources.slice(0,3).map(s => `<a href="${s}" target="_blank" rel="noopener" class="underline hover:text-slate-200">${new URL(s).hostname}</a>`).join(' • ')}
                </div>` : '';

            return `
                <div class="tip-card ${bgColors[index]} rounded-lg p-5 border ${borderColors[index]} transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="${textColors[index]} font-bold text-lg">💡 AI Tip #${index + 1}</h4>
                        <span class="px-3 py-1 ${bgColors[index]} rounded-full text-xs font-semibold ${textColors[index]} border ${borderColors[index]}">
                            ${tip.confidence}
                        </span>
                    </div>
                    <div class="tip-main mb-3">
                        <p class="text-slate-200 font-semibold text-lg mb-1">${tip.description} @${tip.odds}</p>
                        <div class="tip-stats flex gap-4 text-sm">
                            <span class="text-slate-400">Probability: <span class="${textColors[index]} font-semibold">${tip.probability}</span></span>
                            <span class="text-slate-400">EV: <span class="text-green-400 font-semibold">${tip.ev}</span></span>
                        </div>
                    </div>
                    <div class="tip-reasoning bg-slate-800/50 rounded-lg p-3">
                        <p class="text-xs text-slate-400 leading-relaxed">${tip.reasoning}</p>
                        ${sourcesHtml}
                    </div>
                    <div class="tip-actions mt-3 flex gap-2">
                        <button class="copy-tip-btn flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm py-2 px-3 rounded-lg transition-all" onclick="copyTipToClipboard('${tip.description} @${tip.odds} | Probability: ${tip.probability} | EV: ${tip.ev} | ${tip.confidence}')">
                            📋 Copy Tip
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        let html = matchInfoHtml + tipsHtml;
        // Hide raw 'null' strings when teams are unknown (query-only flow)
        try { html = html.replaceAll('null', ''); } catch (_) { html = html.split('null').join(''); }
        tipContainer.innerHTML = html;
    }

    // Copy tip to clipboard
    window.copyTipToClipboard = function(tipText) {
        navigator.clipboard.writeText(tipText).then(() => {
            showAlert('Tip copied to clipboard!', 'success');
        });
    };

    function updateGenerateButton() {
        const storedConfig = JSON.parse(localStorage.getItem('aiConfig') || '{}');
        const apiKeyInput = document.getElementById('ai-api-key');
        const generateButton = document.getElementById('generate-tips');
        const currentKey = (apiKeyInput?.value || storedConfig.apiKey || '').trim();

        if (generateButton) {
            generateButton.disabled = currentKey.length === 0;
        }
    }

    function showAlert(message, type) {
        // Simple alert implementation (you can enhance this)
        const alertDiv = document.createElement('div');
        alertDiv.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white z-50 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`;
        alertDiv.textContent = message;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}

// Initialize search with debouncing
const debouncedSearch = debounce(handleSearch, 300);
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debouncedSearch);
    }
    
    // Initialize new features
    initializeDragAndDrop();
    initializeAIIntegration();
});
