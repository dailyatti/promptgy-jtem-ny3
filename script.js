// Professional Sports Betting Prompt Library - Complete JavaScript Implementation
// Advanced sports betting analysis with comprehensive sport coverage

const defaultSportsData = {
    football: {
        name: "Football",
        icon: '⚽',
        category: 'traditional',
        title: "Professional Football Analysis Prompt",
        prompt: "Find today's football matches from all leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, MLS, Copa Libertadores, Championship, etc.), and review bookmakers for odds. Check other tipsters' opinions - only give tips that are today, and odds exceed 1.90. Think through your answer carefully and justify it in detail. Give both single and combo tips. Think like a sports betting professional who has been doing this for 20 years and specializes in football. Examine everything from team form to weather to missing players. Analyze teams' xG/xGA (Expected Goals) and xPTS (Expected Points) indicators, npxG (non-penalty xG) values, Big Chances Created/Conceded statistics, possession %, PPDA (passes per defensive action), progressive pass & carry numbers, deep completions, set piece efficiency, pressing intensity zones, defensive line height and field tilt ratio. Also pay attention to international cup matches, friendly matches and qualification matches. Think about which could be the best value bet with at least 50%+ probability. Don't forget: you are a professional who pays attention to everything, even things that bookmakers might not notice. Justify your answers well and write them in proper tip format at the end. Very important to review multiple groups and comments, especially those discussing betting value, and where multiple people see value bets - for example missing key player or other factor that escapes bookmakers' attention. The point: write the tips in tip format at the end.",
        specificMatchPrompt: "⚽ SPECIFIC FOOTBALL MATCH: {MATCH} {DATE}\n\nPhD-level football quantum analytics analysis for the specified match:\n\n📊 ADVANCED TEAM QUANTUM METRICS (last 15 matches):\n- xG/xGA (Expected Goals) regression analysis and correlation matrix\n- npxG (non-penalty xG) vs actual goal ratio statistical modeling\n- Possession % and PPDA (passes per defensive action) correlation analysis\n- Progressive passes/carries and deep completions regression modeling\n- Set piece efficiency (free kicks, corners, penalties) binomial probability\n- Big chances created/conceded Poisson distribution modeling\n- Pressing intensity zones and defensive line height statistical analysis\n- Field tilt ratio and territorial dominance regression modeling\n- Team Performance Quantum Index: E(Team_Performance) = f(xG, Possession, PPDA, Set_Pieces, Pressing)\n\n🎯 GOAL MODELING QUANTUM ANALYTICS:\n- **Goal models (Poisson)**: P(Goals = k) = (λ^k × e^(-λ)) / k!\n- **Win-Draw-Lose probabilities**: P(Win) = f(xG_Advantage, Home_Advantage, Form_Differential)\n- **BTTS (Both Teams To Score)**: P(BTTS) = f(Attack_Strength, Defense_Weakness, Historical_Pattern)\n- **Expected Goals Model**: E(Goals) = Base_Attack × Form_Factor × Home_Advantage × Weather_Factor\n- **Goal Distribution Quantum Model**: E(Goal_Distribution) = f(Attack_Quality, Defense_Quality, Match_Context)\n\n🆚 HEAD-TO-HEAD QUANTUM ANALYSIS:\n- Last 10 matches record and goals regression analysis\n- Home/away forms against each other statistical modeling\n- Tactical matchup history correlation matrix\n- Psychological advantages and mental edge factor analysis\n- H2H Performance Quantum Model: E(H2H_Performance) = f(Historical_Record, Recent_Form, Tactical_Matchup)\n\n⚠️ TEAM SITUATION QUANTUM ANALYTICS:\n- Injuries/suspensions impact regression analysis (TransferMarkt/Sofascore)\n- Coaching tactical changes effectiveness statistical modeling\n- Motivational factors (title race, relegation, cup match) factor analysis\n- Squad rotation plans and European competition impact correlation modeling\n- Team Situation Quantum Index: E(Team_Situation) = f(Injuries, Tactics, Motivation, Rotation)\n\n🌡️ ENVIRONMENTAL FACTOR QUANTUM MODELING:\n- **Weather correction**: WX = f(Temperature, Wind, Humidity, Rain_Probability)\n- Weather forecast impact regression analysis\n- Pitch condition (grass height, hard/soft surface) statistical modeling\n- Crowd effect and home advantage correlation analysis\n- Environmental Impact Quantum Model: E(Env_Impact) = f(Weather, Pitch_Condition, Crowd, Home_Advantage)\n\n💰 BETTING VALUE QUANTUM OPPORTUNITIES:\n- Odds comparison 8+ bookies (Bet365, Unibet, Betfair, Pinnacle) statistical analysis\n- Closing line movement and sharp money tracking regression modeling\n- Insider tips and panel opinions correlation analysis\n- Public % vs sharp money distribution statistical modeling\n- **Value-based decision**: Calculate Expected Value (EV) for every market outcome: EV = (Probability × Odds) - 1\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n\n📈 QUANTUM ADVANCED FORMULAS:\n- **Win Probability Quantum Model**: P(Win) = f(xG_Diff, Home_Advantage, Form_Differential, H2H_History)\n- **Expected Goals Quantum Model**: E(Goals) = Base_Attack × Form_Factor × Home_Advantage × Weather_Factor\n- **BTTS Probability Model**: P(BTTS) = f(Attack_Strength_A, Attack_Strength_B, Defense_Weakness_A, Defense_Weakness_B)\n- **Value Bet Quantum Index**: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- **Expected Value Model**: EV = (Model_Probability × Bookmaker_Odds) - 1\n- **Weather Correction Model**: WX = f(Temperature, Wind_Speed, Humidity, Rain_Probability)\n- **Referee Factor Model**: Ref = f(Historical_Cards, Penalty_Tendency, Home_Bias)\n\n🎯 QUANTUM BETTING STRATEGY:\n- **Corners (bivariate Poisson)**: P(Corners = k) = f(λ_c, λ_s) where λ_s is correlation parameter for joint attack\n- **Cards (Zero‑Inflated Poisson)**: λ_L = e^(θ₀ + θ₁ FR + θ₂ LI + θ₃ WX + θ₄ Derby)\n- **BTTS - same as above; align with goal model**\n- Multi-factor regression analysis for optimal bet selection\n- Monte Carlo simulation for score distribution modeling\n- Bayesian inference for odds movement prediction\n- Machine learning model for value bet identification\n- Portfolio optimization for risk-adjusted returns\n\n🎯 SPECIFIC TIP RECOMMENDATIONS:\n1. 1X2 & double chance (with reasoning and EV calculation)\n2. Over/Under goals (2.5, 3.5) + BTTS (with Poisson model)\n3. Handicap bets (AH -1, -1.5) (with regression analysis)\n4. Player props (goals, shots, passes) (with statistical modeling)\n5. First/last goal time, half-time results (with time-based analysis)\n6. Corners and cards (with bivariate Poisson and Zero-Inflated Poisson models)\n\nExpected value bets minimum 53% probability, based on PhD-level football quantum analytics and advanced statistical modeling!"
    },

    basketball: {
        name: "Basketball",
        icon: '🏀',
        category: 'traditional',
        title: "Strategic Basketball Analysis Prompt",
        prompt: "Think like a professional basketball analyst who has been following international and domestic championships for 15+ years. Look for today's basketball matches with minimum 1.90 odds from all available leagues (NBA, EuroLeague, National championships). Examine in detail the teams' offensive/defensive ratings, pace factor, rebounding percentages, and last 10 games form. Pay special attention to key player injuries, back-to-back game effects, and home/away form differences. Research basketball forums, Reddit NBA/EuroLeague subreddits, Twitter basketball expert posts, and review insider information - such as load management decisions, rookie vs veteran matchups, or last-minute player dropouts. Look for value bets where real probability can be estimated at least 55%. Focus on player props (points, rebounds, assists), team totals, quarter/half betting, and spread markets. Pay special attention to revenge game factors, playoff positioning motivation, and clutch time statistics. In the end, give specific single and combo tips with clear justification.",
        specificMatchPrompt: "🏀 SPECIFIC BASKETBALL MATCH: {MATCH} {DATE}\n\nPhD-level NBA/EuroLeague analytics analysis for the specified match:\n\n📊 ADVANCED TEAM METRICS (last 15 games):\n- Offensive/Defensive Rating + Net Rating trends\n- Pace Factor and possessions/game variance\n- Effective FG% and True Shooting% efficiency\n- AST/TO ratio and AST% distribution\n- Rebounding: OFF/DEF % and Second Chance points\n- **RAPTOR/LEBRON on-off splits and lineup synergies (2-man, 3-man net-rating)**\n- **Clutch time WPΔ (win-probability swing) data in last 5 minutes ≤5 point difference**\n\n🎯 PLAYER ANALYTICS & MATCHUPS:\n- Usage Rate and PER (Player Efficiency Rating)\n- VORP (Value Over Replacement Player)\n- BPM (Box Plus/Minus) and WS/48 (Win Shares per 48)\n- On/Off Court Net Rating differential\n- Head-to-head player battle efficiency\n\n⚡ OFFENSIVE SCHEME ANALYSIS:\n- Motion vs ISO offense effectiveness\n- Pick & Roll vs Pick & Pop efficiency\n- 3PT attempt rate and accuracy by distance\n- Paint touches and post-up frequency\n- Transition offense vs half-court sets\n\n🛡️ DEFENSIVE ADVANCED METRICS:\n- Switch vs Drop vs Hedge coverage rates\n- Defensive Rating by lineup combinations\n- Rim protection and paint defense efficiency\n- 3PT defense and close-out effectiveness\n- Defensive rebounding positioning\n\n⏰ SITUATIONAL PERFORMANCE:\n- Clutch time performance (5 min < 5 points)\n- First quarter vs second half scoring splits\n- Home court vs road performance differential\n- Back-to-back game fatigue impact\n- Rest advantage and travel schedule effects\n\n🔍 ADVANCED INSIGHTS:\n- Line movement analysis and sharp money flow\n- Public betting % vs professional action\n- Referee crew assignment and calling tendencies\n- Weather impact (outdoor courts, altitude)\n- Motivation factors (playoff race, revenge games)\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Spread efficiency and ATS trends\n- Total points O/U (pace-adjusted analysis)\n- Player props: PRA, 3PT made, R+A, Double-Double\n- Quarter/Half betting (slow/fast start patterns)\n- Team props: FG%, TO count, made 3s, paint points\n\n📈 ADVANCED FORMULAS:\n- Win Probability Model: P(Win) = f(Net_Rating_diff, Pace_Advantage, Rest_Factor)\n- Expected Score: E(Score) = Base_Offense × Pace_Factor × Efficiency_Factor\n- Value Bet Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- Player Performance Model: E(PRA) = Usage_Rate × Efficiency × Minutes_Projection\n\nExpected value bets 55%+ probability, based on PhD-level basketball analytics and insider info!"
    },

    tennis: {
        name: "Tennis",
        icon: '🎾',
        category: 'traditional',
        title: "Professional Tennis Analysis Prompt",
        prompt: "Act like a tennis expert with 20 years of experience and value betting specialist. Look for today's tennis matches with minimum 1.90 odds from all major tournaments (ATP, WTA, Challenger, ITF). Analyze in detail players' surface preference (clay/grass/hard), head-to-head record, recent form, and last 5 matches serve/return statistics. **Measure serve+1 winner % / return+1 error % ratio, broken down by deuce/ad side - if difference ≥8%, value spot.** Research tennis forums (TennisWorld, MTF), social media posts, TennisTV comments for hidden information like minor injuries, coaching changes, personal issues, or travel fatigue. Pay special attention to weather conditions impact, jet lag, tournament progression, and playing style matchups (baseliner vs serve&volley). Look for value bets where bookmaker odds don't accurately reflect real chances - minimum 52% estimated probability. Focus on match winner, set betting, total games, first set winner, and player performance markets. Analyze break point conversion rates, tiebreak records, and pressure situation performance. In the end, give structured single and accumulator tips with detailed reasoning.",
        specificMatchPrompt: "🎾 SPECIFIC TENNIS MATCH: {MATCH} {DATE}\n\nPhD-level tennis analytics analysis for the specified matchup:\n\n🏟️ SURFACE & ENVIRONMENTAL ANALYSIS:\n- Court type (hard/clay/grass) preference matrix\n- Court speed index (slow/medium/fast) correlation\n- Weather impact: temperature, wind, humidity effects\n- Altitude effect and ball behavior physics\n- Indoor vs outdoor adaptation patterns\n\n📈 ADVANCED PLAYER METRICS (last 20 matches):\n- Surface-specific win/loss probability model\n- Serve efficiency: 1st serve %, ACE/DF ratio analysis\n- Return game efficiency: break point conversion rates\n- Rally length preference: baseline vs net approach\n- Mental toughness indicators: comeback win probability\n\n🆚 HEAD-TO-HEAD STATISTICAL BREAKDOWN:\n- All-time H2H record and trend analysis\n- Surface-specific H2H performance metrics\n- Set/game win percentage differentials\n- Most recent encounter detailed analysis\n- Psychological edge assessment model\n\n💪 FORM & FITNESS ANALYTICS:\n- Tournament progression and match time correlation\n- Recent injury concerns/recovery timeline\n- Travel schedule and jet lag impact model\n- Coaching team changes effectiveness\n- Personal life stability factor analysis\n\n🎯 TACTICAL MATCHUP ANALYSIS:\n- Playing style compatibility matrix (aggressor vs counterpuncher)\n- Serve patterns vs return positioning efficiency\n- Forehand vs backhand dominance correlation\n- Net game vs baseline grind effectiveness\n- Pressure point execution: break points, tiebreaks\n\n📊 BETTING VALUE OPPORTUNITIES:\n- Match winner odds comparison and value identification\n- Set betting opportunities: straight sets, total sets\n- Game handicap lines and efficiency analysis\n- Total games O/U correlation with surface speed\n- Player props: ACEs, double faults, winners prediction\n\n📈 ADVANCED FORMULAS:\n- Win Probability Model: P(Win) = f(Surface_Advantage, H2H_History, Form_Differential)\n- Expected Games: E(Games) = Base_Games × Surface_Factor × Fitness_Factor\n- Value Bet Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- Serve Efficiency Model: E(Serve_Win%) = f(1st_Serve%, ACE_Rate, Surface_Speed)\n\nValue tips 52%+ probability, based on PhD-level tennis analytics and surface-compatibility!"
    },

    american_football: {
        name: "American Football",
        icon: '🏈',
        category: 'traditional',
        title: "NFL Strategic Analysis Prompt",
        prompt: "Be an NFL insider analyst with 20+ years of experience who knows every statistical and motivational factor. Examine the weekend NFL slate with minimum 1.90 odds. Dive deep into teams' advanced metrics: DVOA (offense/defense/special teams), EPA per play, red zone efficiency, third down conversion rates, turnover differential, and time of possession trends. Research NFL Twitter/X beat reporters, team subreddits, injury reports, weather forecasts. Look for insider information: motivational edges (revenge games, contract years, coaching hot seats), line movement analysis, sharp vs public money, and vegas insider tips. Pay special attention to playoff implications, divisional rivalry dynamics, prime time performance history, and rest advantages (bye weeks, short weeks). Look for value bets with 55%+ estimated probability in spread, totals, player props (passing/rushing/receiving yards, TDs), team props, and live betting scenarios. Analyze coaching tendencies, game script probabilities, and in-game adjustment capabilities. In the end, give strategic tips in single and parlay format with specific reasoning.",
        specificMatchPrompt: "🏈 SPECIFIC NFL MATCH: {MATCH} {DATE}\n\nPhD-level NFL quantum analytics analysis for the specified match:\n\n📊 ADVANCED TEAM QUANTUM METRICS (last 10 games):\n- DVOA (Defense-adjusted Value Over Average): Offense/Defense/ST regression analysis\n- EPA (Expected Points Added) per play trend correlation matrix\n- Success Rate: 1st/2nd/3rd down conversion efficiency statistical modeling\n- Red Zone TD% vs Field Goal% conversion rates binomial probability analysis\n- Time of Possession variance and TOP efficiency regression modeling\n- Team Performance Quantum Index: E(Team_Performance) = f(DVOA, EPA, Success_Rate, Red_Zone_Efficiency)\n\n🎯 QUARTERBACK QUANTUM ANALYTICS:\n- QBR (Total Quarterback Rating) and EPA/play correlation analysis\n- Air Yards vs YAC (Yards After Catch) distribution statistical modeling\n- Pressure Rate and Sack Rate regression analysis\n- Deep Ball Accuracy (20+ yard attempts) binomial probability modeling\n- Red Zone Passing Efficiency (inside 20) statistical analysis\n- QB Performance Quantum Model: E(QB_Performance) = f(QBR, EPA, Pressure_Rate, Deep_Ball_Accuracy)\n\n🏃‍♂️ RUSHING ATTACK QUANTUM ANALYSIS:\n- Rushing Success Rate and EPA/rush correlation matrix\n- Gap vs Zone blocking scheme effectiveness statistical modeling\n- Yards Before/After Contact metrics regression analysis\n- Red Zone rushing TD conversion rate binomial probability\n- Play-action effectiveness correlation analysis\n- Rushing Attack Quantum Model: E(Rush_Attack) = f(Success_Rate, EPA, Blocking_Scheme, YAC)\n\n🛡️ DEFENSIVE QUANTUM ADVANCED METRICS:\n- Pass Rush Win Rate and Pressure Rate correlation analysis\n- Coverage Success Rate (man vs zone) statistical modeling\n- Run Stop Rate and Tackle Efficiency regression analysis\n- Red Zone Defense TD prevention % binomial probability\n- Third Down Defense conversion rate statistical modeling\n- Defensive Performance Quantum Model: E(Defense) = f(Pass_Rush, Coverage, Run_Stop, Red_Zone_Defense)\n\n⚡ SPECIAL TEAMS QUANTUM IMPACT:\n- Field Position Battle (starting field position) regression analysis\n- Punt/Kickoff Return efficiency statistical modeling\n- Field Goal accuracy by distance ranges binomial probability\n- Punt Net Average and Inside 20 rate correlation analysis\n- Special Teams DVOA contribution regression modeling\n- Special Teams Quantum Index: E(Special_Teams) = f(Field_Position, Return_Efficiency, FG_Accuracy)\n\n🌡️ SITUATIONAL FACTOR QUANTUM MODELING:\n- Weather impact: Wind speed/direction, temperature regression analysis\n- Rest advantage: Bye week, short week, travel statistical modeling\n- Historical venue performance trends correlation analysis\n- Prime time vs day game performance splits binomial probability\n- Divisional rivalry intensity metrics regression modeling\n- Situational Impact Quantum Model: E(Situational_Impact) = f(Weather, Rest, Venue, Prime_Time, Rivalry)\n\n💰 BETTING VALUE QUANTUM OPPORTUNITIES:\n- Line movement analysis and sharp money flow statistical modeling\n- Spread efficiency and ATS trends regression analysis\n- Total points O/U correlation with weather factor analysis\n- Player props: Passing/Rushing/Receiving yards, TDs prediction model\n- Team props: First half scoring, total sacks statistical modeling\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n\n📈 QUANTUM ADVANCED FORMULAS:\n- Win Probability Quantum Model: P(Win) = f(DVOA_diff, EPA_trend, rest_adv, situational_factors)\n- Expected Score Quantum Model: E(Score) = Base_Offense × Weather_Factor × Rest_Factor × Venue_Factor\n- Value Bet Quantum Index: VBI = (Model_Prob - Bookmaker_Prob) / Bookmaker_Prob\n- QB Performance Quantum Model: E(QB_Score) = QBR × EPA × Pressure_Factor × Deep_Ball_Factor\n- Defensive Performance Quantum Model: E(Def_Score) = Pass_Rush_Rate × Coverage_Success × Run_Stop_Rate\n- Special Teams Quantum Model: E(ST_Score) = Field_Position_Battle × Return_Efficiency × FG_Accuracy\n\n🎯 QUANTUM BETTING STRATEGY:\n- Multi-factor regression analysis for optimal bet selection\n- Monte Carlo simulation for score distribution modeling\n- Bayesian inference for odds movement prediction\n- Machine learning model for value bet identification\n- Portfolio optimization for risk-adjusted returns\n- NFL quantum analytics for advanced statistical modeling\n\nExpected value bets 55%+ probability, based on PhD-level NFL quantum analytics and insider info!"
    },

    baseball: {
        name: "Baseball",
        icon: '⚾',
        category: 'traditional',
        title: "Professional Baseball Analysis Prompt",
        prompt: "Act as a professional baseball analyst with 15+ years of experience in MLB, NPB, and other major leagues. Search for today's baseball games with minimum 1.90 odds. Analyze teams' advanced statistics: wOBA (weighted On-Base Average), FIP (Fielding Independent Pitching), BABIP (Batting Average on Balls in Play), and recent form trends. Pay special attention to starting pitcher matchups, bullpen usage, weather conditions (wind direction, temperature), and park factors. Research baseball communities, Twitter beat reporters, and injury reports for insider information like lineup changes, player callups, or minor injuries. Look for value bets in run lines, totals, first 5 innings, and player props (hits, runs, RBIs, strikeouts). Consider situational factors like day games after night games, travel schedules, and series dynamics. Analyze pitcher vs hitter historical matchups and platoon splits. Give structured tips with statistical backing and minimum 53% estimated probability.",
        specificMatchPrompt: "⚾ SPECIFIC BASEBALL MATCH: {MATCH} {DATE}\n\nPhD-level baseball analytics for the specified game:\n\n🎯 PITCHER ANALYSIS:\n- Starting pitcher recent form and advanced metrics (FIP, xFIP, SIERA)\n- Bullpen availability and usage patterns\n- Pitcher vs opposing lineup historical performance\n- Platoon splits and handedness advantages\n\n📊 OFFENSIVE METRICS:\n- Team wOBA and wRC+ trends\n- vs LHP/RHP splits and matchup advantages\n- BABIP regression analysis\n- Power metrics: ISO and HR/FB rate\n\n🌡️ ENVIRONMENTAL FACTORS:\n- Weather impact: wind speed/direction, temperature\n- Park factors and ballpark dimensions\n- Day vs night game performance\n- Travel and rest considerations\n\n💰 VALUE OPPORTUNITIES:\n- Run line efficiency and historical trends\n- Total runs O/U with weather adjustment\n- First 5 innings betting advantages\n- Player props: hits, runs, RBIs, strikeouts\n\nExpected value bets 53%+ probability with advanced baseball analytics!"
    },

    ice_hockey: {
        name: "Ice Hockey",
        icon: '🏒',
        category: 'traditional',
        title: "Professional Hockey Analysis Prompt",
        prompt: "Be a professional hockey analyst with extensive knowledge of NHL, international leagues, and advanced hockey metrics. Find today's hockey games with minimum 1.90 odds. Analyze teams' Corsi%, Fenwick%, PDO, expected goals for/against, and recent performance trends. Pay attention to goaltender matchups, back-to-back situations, power play efficiency, and penalty kill success rates. Research hockey communities, insider reports, and injury news for lineup changes or goalie starts. Consider situational factors like home/road performance, divisional rivalries, and playoff positioning. Look for value in puck lines, totals, period betting, and player props (goals, assists, shots, saves). Analyze special teams efficiency and 5v5 underlying metrics. Provide detailed tips with advanced analytics and minimum 54% estimated probability.",
        specificMatchPrompt: "🏒 SPECIFIC HOCKEY MATCH: {MATCH} {DATE}\n\nPhD-level hockey analytics for the specified game:\n\n🥅 GOALTENDING ANALYSIS:\n- Starting goalie confirmation and recent performance\n- Save percentage and goals saved above expected\n- Historical performance vs opposing team\n- Back-to-back game fatigue factors\n\n📊 TEAM METRICS:\n- Corsi% and Fenwick% underlying performance\n- Expected goals for/against trends\n- PDO sustainability analysis\n- Special teams efficiency rates\n\n⚡ SITUATIONAL FACTORS:\n- Power play vs penalty kill matchups\n- Home/road performance splits\n- Divisional rivalry intensity\n- Rest and travel advantages\n\n💰 VALUE OPPORTUNITIES:\n- Puck line efficiency analysis\n- Total goals O/U with goalie adjustment\n- Period betting patterns\n- Player props: goals, assists, shots, saves\n\nExpected value bets 54%+ probability with advanced hockey analytics!"
    },

    boxing: {
        name: "Boxing",
        icon: '🥊',
        category: 'traditional',
        title: "Professional Boxing Analysis Prompt",
        prompt: "Think like a combat sports analyst and boxing betting specialist with 20+ years of experience. Find upcoming boxing matches with minimum 1.90 odds from all weight classes. Analyze boxers' fighting styles, technical skills (jab accuracy, power punching, defense, footwork), reach/height advantages, and knockout power statistics. Research boxing forums (BoxingScene, Boxing News), ESPN boxing sections, and fighter social media accounts for information like training camp quality, sparring partner selection, weight cut difficulties, personal motivations, or family issues. Pay special attention to age factors, ring rust effects (layoff time), venue/crowd advantages, referee/judging tendencies, and stylistic matchup implications. Look for value bets with minimum 55% probability in method of victory (KO/TKO/Decision), round betting, fight duration over/under, and fighter performance props markets. Analyze punch output/accuracy statistics, chin durability, cardio conditioning, and mental warfare aspects. Provide technical boxing analysis tips in single and combination bet format with supporting fight breakdown reasoning.",
        specificMatchPrompt: "🥊 SPECIFIC BOXING MATCH: {MATCH} {DATE}\n\nPhD-level boxing combat analysis for the specified fight:\n\n🥊 FIGHTER TECHNICAL ANALYSIS:\n- Orthodox vs Southpaw stance advantages\n- Jab frequency and accuracy percentages\n- Power punching statistics and knockout ratio\n- Defensive metrics: slip percentage, block rate\n- Footwork mobility and ring generalship\n\n📊 PHYSICAL ATTRIBUTES COMPARISON:\n- Height, reach, and weight advantages\n- Age and experience differential\n- Punch resistance and chin durability\n- Cardio conditioning and late-round performance\n- Recovery ability between rounds\n\n🎯 STYLISTIC MATCHUP MATRIX:\n- Aggressive vs defensive fighting approach\n- Inside fighting vs outside boxing preference\n- Counter-punching vs pressure fighting styles\n- Ring IQ and tactical adaptability\n- Mental toughness under pressure\n\n💪 RECENT FORM AND PREPARATION:\n- Training camp quality and sparring partners\n- Weight cut difficulty and health factors\n- Motivation levels and career positioning\n- Team changes (trainer, cutman, corner)\n- Personal life stability and distractions\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Method of victory probabilities\n- Round betting based on fighting patterns\n- Fight duration over/under analysis\n- Knockdown and point deduction props\n- Fighter performance metrics betting\n\nExpected value bets 55%+ probability with professional combat sports analysis!"
    },

    mma: {
        name: "MMA/UFC",
        icon: '🥋',
        category: 'traditional',
        title: "UFC/MMA Complex Combat Analysis Prompt",
        prompt: "Act like an MMA technical analyst and UFC betting insider with 15+ years of experience. Examine upcoming UFC cards with minimum 1.90 odds. Dive deep into fighters' grappling credentials, striking accuracy/defense metrics, takedown offense/defense percentages, submission attempt rates, and cardio/conditioning levels. Research MMA forums (r/MMA, Sherdog, MMA Underground), UFC social media, and fighter interviews for information like training camp changes, injury recoveries, weight cut issues, personal motivations, or team dynamics. Pay special attention to fighting style matchups (striker vs grappler), cage control tendencies, altitude/venue effects, and referee assignment impacts. Look for value bets with minimum 56% probability in method of victory, round betting, fight duration, and fighter performance props (significant strikes, takedowns, submission attempts). Analyze fight IQ, finishing ability, comeback potential, and pressure performance metrics. Give comprehensive MMA betting strategy in single selections and parlay combinations with detailed technical breakdown reasoning.",
        specificMatchPrompt: "🥋 SPECIFIC MMA/UFC FIGHT: {MATCH} {DATE}\n\nPhD-level MMA technical analysis for the specified matchup:\n\n🥊 STRIKING ANALYTICS:\n- Significant strikes per minute and accuracy\n- Head/body/leg strike distribution patterns\n- Distance control and range management\n- Counter-striking efficiency and timing\n- Knockout power and finishing ability\n\n🤼 GRAPPLING METRICS:\n- Takedown accuracy and defense percentages\n- Ground control time and position advancement\n- Submission attempt rate and success ratio\n- Scrambling ability and bottom game defense\n- Wrestling credentials and BJJ ranking\n\n⚡ CARDIO AND CONDITIONING:\n- Third round performance differential\n- Output consistency across fight duration\n- Recovery between rounds analysis\n- Weight cut impact on performance\n- Training camp intensity and preparation\n\n🎯 TACTICAL MATCHUP BREAKDOWN:\n- Striker vs grappler style dynamics\n- Cage control and pressure fighting\n- Clinch work and dirty boxing effectiveness\n- Defensive wrestling and takedown sprawling\n- Fight IQ and in-fight adaptations\n\n🏟️ ENVIRONMENTAL FACTORS:\n- Altitude effects on cardio performance\n- Home crowd advantage impact\n- Referee tendencies (stand-ups, warnings)\n- Octagon size preference analysis\n- International venue travel effects\n\n💰 VALUE OPPORTUNITIES:\n- Method of victory probability modeling\n- Round betting based on finishing patterns\n- Performance bonus potential analysis\n- Prop bets: strikes landed, takedowns, submissions\n- Live betting opportunities during fight\n\nExpected value bets 56%+ probability with advanced MMA combat analytics!"
    },

    golf: {
        name: "Golf",
        icon: '⛳',
        category: 'traditional',
        title: "PGA Tour Advanced Analytics Prompt",
        prompt: "Be a PGA Tour insider and golf betting expert with 22+ years of experience. Examine weekend tournaments with minimum 1.90+ odds. Dive deep into players' comprehensive strokes gained analysis: SG: Off-the-Tee (driving distance/accuracy balance), SG: Approach (proximity to hole by distance ranges), SG: Around-the-Green (scrambling artistry), SG: Putting (surface-specific make percentages), SG: Total trajectory analysis. Research golf analytics communities (DataGolf deep dives, Golf Channel metrics, PGA Tour ShotLink database), player equipment changes (club/ball switches impact), caddie insights (course management philosophies), and weather forecast models (wind speed/direction by hole) for information like swing coach changes (technical modifications timeline), injury recovery progression (medical withdrawal history), personal life stability factors (family events, sponsorship pressures), course history dominance patterns, or pre-tournament practice round intensity. Pay special attention to course-specific requirements (driving distance importance vs accuracy premium courses, approach shot dispersion patterns, green complex severity ratings), historical scoring conditions analysis (winning score trends, cut line projections), recent form weighted metrics (last 3/5/10 events performance curves), pressure performance indicators (Sunday back-nine scoring averages, major championship experience), and seasonal form cycles (West Coast/Florida swing specialists). Look for value bets with minimum 52% probability: outright winner (overlay identification), each-way value spots (top-5/10/20 place terms), head-to-head matchups (course fit advantages), first round leader (aggressive vs conservative starts), make/miss cut markets (consistency metrics), 3-ball/2-ball betting (daily matchups), nationality/region group betting, tournament matchbet combinations, and live in-play opportunities (momentum shifts). Analyze playing style vs course design matrix (bombers vs plotters success rates), putting surface adaptation speeds (Bermuda vs Bentgrass vs Poa Annua), weather window advantages (morning vs afternoon wave draw bias), mental game resilience indicators (comeback history, front-runner stability), and tournament position pressure handling (first-time winner probability vs veteran closing skills). Provide comprehensive tournament betting strategy in single selections and portfolio approach format with supporting strokes gained deep dive, course history weighting, current form trajectory analysis, and psychological pressure performance prediction.",
        specificMatchPrompt: "⛳ SPECIFIC GOLF TOURNAMENT: {TOURNAMENT} {DATE}\n\nPhD-level golf analytics for the specified tournament:\n\n🏌️ STROKES GAINED ANALYSIS:\n- SG: Off-the-Tee vs course driving requirements\n- SG: Approach vs green sizes and pin positions\n- SG: Around-the-Green vs short game complexity\n- SG: Putting vs green speed and grain direction\n- SG: Total trend analysis (last 10 rounds)\n\n🎯 COURSE FIT ANALYTICS:\n- Historical performance at venue (last 5 years)\n- Course setup preferences (length, rough, greens)\n- Weather adaptation patterns\n- Elevation and climate adjustment factors\n- Similar course performance correlation\n\n📈 FORM AND FITNESS:\n- Recent tournament results (last 8 weeks)\n- Rounds under pressure performance\n- Weekend scoring average trends\n- Physical condition and injury status\n- Mental game confidence indicators\n\n🌡️ CONDITIONS ANALYSIS:\n- Weather forecast impact on scoring\n- Wind direction vs hole layout advantages\n- Temperature effects on ball flight\n- Course conditions (firm/soft, rough height)\n- Optimal tee time windows\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Outright winner odds vs model probability\n- Each-way value in top finishes\n- Head-to-head matchup advantages\n- Round leader betting opportunities\n- Cut line and scoring props\n\nExpected value bets 52%+ probability with professional golf analytics!"
    },

    formula1: {
        name: "Formula 1",
        icon: '🏎️',
        category: 'motor',
        title: "F1 Technical Analysis Prompt",
        prompt: "Think like an F1 technical analyst and motorsport betting specialist with 18+ years of paddock experience. Examine upcoming F1 race weekends with minimum 1.90 odds. Analyze in depth: car performance metrics (straight-line speed, cornering efficiency, tire degradation patterns), driver form analysis (qualifying pace, race starts, wheel-to-wheel combat, strategic decision-making), team tactical capabilities (pit stop efficiency, strategy execution, race management), and championship implications (points pressure, team orders, development priorities). Research F1 technical forums (r/F1Technical, Autosport, Motorsport.com), paddock insider reports, team social media, and FP1/FP2/FP3 data for information like car upgrades effectiveness, driver confidence levels, team internal dynamics, reliability concerns, or weather adaptation capabilities. Pay special attention to track-specific requirements (power vs downforce circuits, tire compound selections, DRS effectiveness zones), historical performance patterns at venue, recent development trajectory analysis, and weather forecast impacts (rain probability, track temperature effects, wind conditions). Look for value bets with minimum 54% probability in race winner, podium finishes, points scoring, head-to-head driver battles, constructors' standings, qualifying positions, fastest lap, and safety car/red flag occurrence props. Analyze driver vs track compatibility matrix, team strategic competence under pressure, car reliability records, and championship fight psychological factors. Provide comprehensive F1 weekend betting strategy with technical justification, data-driven reasoning, and risk-adjusted selection portfolio approach.",
        specificMatchPrompt: "🏎️ SPECIFIC F1 RACE: {RACE} {DATE}\n\nPhD-level Formula 1 technical analysis for the specified Grand Prix:\n\n🏁 CAR PERFORMANCE MATRIX:\n- Power unit efficiency vs circuit characteristics\n- Aerodynamic package vs track layout suitability\n- Tire degradation patterns vs race distance\n- Fuel consumption optimization analysis\n- Reliability factor assessment (recent DNF patterns)\n\n👨‍💼 DRIVER ANALYTICS:\n- Qualifying vs race pace differential\n- Wheel-to-wheel combat success rates\n- Wet weather performance indicators\n- Pressure situation handling (championship fights)\n- Track experience and historical performance\n\n🔧 STRATEGIC FACTORS:\n- Pit stop window optimization\n- Tire strategy flexibility analysis\n- DRS overtaking opportunity zones\n- Safety car deployment probability\n- Weather contingency planning effectiveness\n\n🌡️ ENVIRONMENTAL CONDITIONS:\n- Track temperature impact on tire performance\n- Rain probability and wet weather specialists\n- Wind effects on aerodynamic balance\n- Track surface evolution throughout weekend\n- Altitude and air density considerations\n\n🏆 CHAMPIONSHIP IMPLICATIONS:\n- Points pressure and risk-taking propensity\n- Team orders implementation probability\n- Development focus vs current performance\n- Inter-team battle dynamics\n- Season trajectory analysis\n\n💰 VALUE OPPORTUNITIES:\n- Race winner odds vs performance model\n- Podium finish probability analysis\n- Head-to-head driver matchups\n- Points scoring and championship props\n- Qualifying position and fastest lap bets\n\nExpected value bets 54%+ probability with F1 technical motorsport analysis!"
    },

    esports_lol: {
        name: "League of Legends",
        icon: '🎮',
        category: 'esports',
        title: "LoL Professional Esports Analysis Prompt",
        prompt: "Act like a League of Legends esports analyst and betting expert with 12+ years of competitive gaming knowledge. Examine today's professional LoL matches (LCS, LEC, LCK, LPL, Worlds, MSI) with minimum 1.90 odds. Analyze team composition strategies, individual player performance metrics (KDA, CS/min, damage per minute, vision score), champion pool depth, and recent patch adaptation. Research esports communities (r/leagueoflegends, lolesports.com, Oracle's Elixir), professional player streams, team social media, and coaching staff interviews for information like roster changes, champion nerfs/buffs impact, team synergy development, individual player form, or meta shift adaptations. Pay special attention to draft phase tendencies (first pick priorities, ban strategies, power picks), early game execution (laning phase dominance, jungle pathing, objective control), mid-game transition capabilities (teamfight coordination, vision control, map rotation), and late-game scaling potential (team composition advantages, shotcalling quality, clutch performance). Look for value bets with minimum 55% probability in match winner, map handicaps (1.5/2.5 maps), total maps over/under, first blood, first tower, first baron, dragon soul, and player performance props (kills, deaths, assists, CS benchmarks). Analyze team vs team historical matchups, individual player head-to-head records, coaching staff tactical competence, and tournament pressure performance indicators. Provide comprehensive LoL esports betting strategy with meta-game understanding, statistical analysis backing, and professional scene insight integration.",
        specificMatchPrompt: "🎮 SPECIFIC LOL MATCH: {MATCH} {DATE}\n\nPhD-level League of Legends esports analysis for the specified matchup:\n\n⚔️ TEAM COMPOSITION ANALYTICS:\n- Draft phase tendencies and champion priorities\n- Team fighting vs split push preference analysis\n- Early/mid/late game power spike timing\n- Counter-pick potential and flex pick versatility\n- Meta adaptation speed and champion mastery\n\n👑 INDIVIDUAL PLAYER METRICS:\n- Laning phase statistics (CS/min, XP diff, solo kills)\n- Map presence and roaming effectiveness\n- Teamfight participation and damage contribution\n- Vision control and objective setup involvement\n- Clutch performance under tournament pressure\n\n🎯 TACTICAL EXECUTION ANALYSIS:\n- Objective control priority (Dragon/Baron/Herald)\n- Early game aggression vs scaling patience\n- Map rotation coordination and timing\n- Teamfight initiation and follow-up execution\n- Late-game shotcalling and decision making\n\n📊 HEAD-TO-HEAD BREAKDOWN:\n- Historical matchup win/loss patterns\n- Individual player rivalry performance\n- Coach vs coach strategic adaptations\n- Recent form trajectory analysis\n- Tournament stage experience differential\n\n🔄 META GAME FACTORS:\n- Current patch champion viability\n- Recent balance changes impact assessment\n- Regional meta differences and adaptations\n- Tournament format and stage implications\n- Player champion pool depth in current meta\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability modeling\n- Map handicap efficiency analysis\n- Total maps played over/under trends\n- First objective achievement rates\n- Player performance prop value identification\n\nExpected value bets 55%+ probability with professional LoL esports analytics!"
    },

    esports_csgo: {
        name: "Counter-Strike",
        icon: '🔫',
        category: 'esports',
        title: "CS2/CSGO Professional Analysis Prompt",
        prompt: "Think like a Counter-Strike esports analyst and tactical betting expert with 15+ years of competitive FPS experience. Examine today's professional CS2/CSGO matches (BLAST, ESL, PGL, HLTV events) with minimum 1.90 odds. Analyze team tactical systems (CT/T side strategies, eco round management, anti-eco execution), individual player statistics (ADR, KAST, rating 2.0, clutch success rate), map pool strengths/weaknesses, and recent performance trends. Research CS community sources (HLTV.org, r/GlobalOffensive, professional player Twitter, team bootcamp updates) for information like roster changes, IGL strategic evolution, individual player confidence, team chemistry development, or meta shift adaptations. Pay special attention to map-specific analysis (CT/T side win rates, economic management, site execution strategies), recent head-to-head encounters, tournament format implications (BO1 vs BO3 vs BO5), and psychological factors (LAN vs online performance, crowd pressure, elimination stakes). Look for value bets with minimum 56% probability in match winner, map handicaps, total maps over/under, individual maps over/under 26.5 rounds, pistol round winners, first kill statistics, and player performance props (kills, deaths, ADR benchmarks, multi-kill rounds). Analyze team vs map compatibility, tactical counterstrategy effectiveness, individual matchup advantages, and tournament progression pressure handling. Provide expert CS2/CSGO betting strategy with tactical understanding, statistical modeling, and professional scene insider knowledge integration.",
        specificMatchPrompt: "🔫 SPECIFIC CS2/CSGO MATCH: {MATCH} {DATE}\n\nPhD-level Counter-Strike tactical analysis for the specified matchup:\n\n🎯 TACTICAL SYSTEM BREAKDOWN:\n- CT side setup preferences and rotational patterns\n- T side execute strategies and default round management\n- Anti-eco and force-buy round execution efficiency\n- Economic management and buy round optimization\n- IGL calling style and mid-round adaptation ability\n\n📊 INDIVIDUAL PERFORMANCE METRICS:\n- Entry fragging success rates and first blood impact\n- Clutch round win percentages and pressure performance\n- AWP effectiveness and positional impact\n- Support player utility usage and trade kill efficiency\n- Recent form analysis (last 10 matches rating trends)\n\n🗺️ MAP POOL ANALYSIS:\n- Historical win rates on selected maps\n- CT/T side balance and round win expectations\n- Site execution preferences and defensive setups\n- Economic factor impact on round outcomes\n- Map-specific player role effectiveness\n\n⚡ HEAD-TO-HEAD DYNAMICS:\n- Recent encounter results and tactical adaptations\n- Individual player matchup advantages\n- IGL vs IGL strategic chess match history\n- Tournament stage performance differential\n- Psychological edge and momentum factors\n\n🏟️ CONTEXTUAL FACTORS:\n- LAN vs online performance variations\n- Tournament format implications (elimination pressure)\n- Recent roster changes and team chemistry\n- Bootcamp preparation and tactical development\n- Map veto prediction and strategic implications\n\n💰 BETTING VALUE OPPORTUNITIES:\n- Match winner probability vs bookmaker odds\n- Map handicap value based on tactical matchups\n- Total maps played modeling (BO1/BO3/BO5)\n- Individual map round totals analysis\n- Player performance props and statistical benchmarks\n\nExpected value bets 56%+ probability with professional CS2/CSGO tactical analytics!"
    },

    darts: {
        name: "Darts",
        icon: '🎯',
        category: 'precision',
        title: "Professional Darts Analysis Prompt",
        prompt: "Be a professional darts analyst and PDC betting specialist with 14+ years of tungsten expertise. Examine upcoming darts tournaments (PDC World Championship, Premier League, World Matchplay, UK Open) with minimum 1.90 odds. Analyze player statistics comprehensively: three-dart averages, checkout percentages, 180s per leg frequency, first nine-dart average, and double attempts success rates. Research darts communities (r/Darts, PDC social media, Sky Sports coverage, player interviews) for information like form trends, personal issues affecting performance, new equipment changes (dart weights, stems, flights), practice routine modifications, or confidence level indicators. Pay special attention to format-specific performance (best-of-3 vs longer formats), stage experience differences (TV table vs floor tournaments), pressure situation handling (deciding legs, major finals), and head-to-head psychological factors. Look for value bets with minimum 53% probability in match winner, handicap betting (-1.5/+1.5 sets or legs), total 180s over/under, highest checkout props, nine-dart finish occurrence, and tournament outright winner selections. Analyze player vs tournament format compatibility, recent form trajectory analysis, mental strength under TV pressure, and seasonal performance patterns. Provide professional darts betting strategy with statistical backing, psychological insight integration, and tungsten sport expertise demonstration.",
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
        prompt: "Act as a swimming analyst and Olympic/World Championships betting expert with 10+ years of pool deck experience. Examine upcoming swimming competitions (Olympics, World Championships, Diamond League) with minimum 1.90 odds. Analyze swimmer technical capabilities: stroke technique efficiency, turn execution, start reaction times, and finishing touch consistency. Research swimming communities for information about recent training times, coaching changes, altitude training camps, technique modifications, or confidence indicators. Pay attention to event-specific strengths, pool conditions, and psychological factors. Look for value bets with minimum 52% probability in race winners, medal positions, record-breaking attempts, and head-to-head matchups. Provide comprehensive swimming betting strategy with technical analysis and performance trajectory assessment.",
        specificMatchPrompt: "🏊 SPECIFIC SWIMMING EVENT: {EVENT} {DATE}\n\nProfessional swimming analysis for the specified competition:\n\n🏊‍♂️ TECHNICAL ANALYSIS:\n- Stroke technique efficiency and biomechanics\n- Start reaction time and underwater distance\n- Turn execution speed and technique\n- Finishing sprint and touch consistency\n\n📊 PERFORMANCE METRICS:\n- Season best times and progression\n- Textile vs tech suit time differentials\n- Altitude training effects assessment\n- Recent competition performance trends\n\n🏆 COMPETITIVE FACTORS:\n- Lane draw advantage/disadvantage\n- Heat placement and positioning\n- Championship experience and pressure handling\n- Rivalry dynamics and motivation levels\n\nExpected value bets 52%+ probability with swimming expertise!"
    },

    track_field: {
        name: "Track & Field",
        icon: '🏃',
        category: 'traditional',
        title: "Track & Field Athletics Analysis Prompt",
        prompt: "Think like a track and field analyst and Diamond League betting specialist with 15+ years of athletics expertise. Examine upcoming competitions (Olympics, World Championships, Diamond League) with minimum 1.90 odds. Analyze athlete capabilities: personal best progression, seasonal form, technique efficiency, and competition strategy. Research athletics communities for information about training progress, coaching changes, injury status, and performance indicators. Pay attention to event-specific factors, weather conditions, and psychological elements. Look for value bets with minimum 53% probability in event winners, medal positions, record attempts, and performance benchmarks.",
        specificMatchPrompt: "🏃 SPECIFIC ATHLETICS EVENT: {EVENT} {DATE}\n\nProfessional athletics analysis:\n\n🏃‍♂️ PERFORMANCE ANALYSIS:\n- Personal best and seasonal best progression\n- Recent competition results and consistency\n- Technical execution and efficiency\n- Racing tactics and positioning strategy\n\n📊 CONDITIONING FACTORS:\n- Training periodization and peaking\n- Injury history and current fitness\n- Weather adaptation capabilities\n- Competition experience and pressure handling\n\nExpected value bets 53%+ probability with athletics expertise!"
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

// Initialize search with debouncing
const debouncedSearch = debounce(handleSearch, 300);
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debouncedSearch);
    }
});