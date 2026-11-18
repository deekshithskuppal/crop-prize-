import sys
import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_presentation(output_path):
    prs = Presentation()
    # 16:9 Widescreen layout
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Color Palette
    PRIMARY = RGBColor(6, 78, 59)      # Dark Emerald
    SECONDARY = RGBColor(16, 149, 93)  # Emerald Green
    ACCENT_GOLD = RGBColor(217, 119, 6)# Amber Gold
    DARK_BG = RGBColor(15, 23, 42)     # Slate 900
    LIGHT_BG = RGBColor(248, 250, 252) # Slate 50
    TEXT_DARK = RGBColor(30, 41, 59)   # Slate 800
    TEXT_MUTED = RGBColor(100, 116, 139)# Slate 500
    CARD_BG = RGBColor(255, 255, 255)  # White
    BORDER_COLOR = RGBColor(226, 232, 240) # Slate 200

    def add_header(slide, title_text, category_text="VTU MINI-PROJECT PRESENTATION (BATCH A2)"):
        # Header banner
        header_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(1.1))
        tf = header_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p1 = tf.paragraphs[0]
        p1.text = category_text.upper()
        p1.font.size = Pt(11)
        p1.font.bold = True
        p1.font.color.rgb = SECONDARY

        p2 = tf.add_paragraph()
        p2.text = title_text
        p2.font.size = Pt(24)
        p2.font.bold = True
        p2.font.color.rgb = PRIMARY
        p2.space_before = Pt(4)

        # Thin divider line
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.5), Inches(11.733), Inches(0.02))
        line.fill.solid()
        line.fill.fore_color.rgb = BORDER_COLOR
        line.line.color.rgb = BORDER_COLOR

    # -------------------------------------------------------------
    # SLIDE 1: Title Slide (Dark Theme)
    # -------------------------------------------------------------
    slide1 = prs.slides.add_slide(blank_layout)
    bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = PRIMARY
    bg1.line.color.rgb = PRIMARY

    title_box = slide1.shapes.add_textbox(Inches(1.0), Inches(1.2), Inches(11.333), Inches(2.8))
    tf1 = title_box.text_frame
    tf1.word_wrap = True
    
    p = tf1.paragraphs[0]
    p.text = "A MINI-PROJECT PRESENTATION ON"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD

    p = tf1.add_paragraph()
    p.text = "Smart Crop Yield and Price Predictor\nUsing Machine Learning"
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.space_before = Pt(8)

    p = tf1.add_paragraph()
    p.text = "Submitted in partial fulfillment of Bachelor of Engineering in Computer Science & Engineering\nVisvesvaraya Technological University (VTU), Belagavi, Karnataka"
    p.font.size = Pt(14)
    p.font.color.rgb = RGBColor(209, 250, 229)
    p.space_before = Pt(12)

    # Details Box (Batch members & Guide)
    team_box = slide1.shapes.add_textbox(Inches(1.0), Inches(4.5), Inches(6.0), Inches(2.2))
    tf_team = team_box.text_frame
    tf_team.word_wrap = True
    p = tf_team.paragraphs[0]
    p.text = "SUBMITTED BY (BATCH NO: A2):"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD

    members = [
        "1. Chetan R Naik (4JN24CS031)",
        "2. Deekshith S Kuppal (4JN24CS040)",
        "3. Ichith M (4JN24CS060)",
        "4. Pavan Kumar J R (4JN24CS197)"
    ]
    for m in members:
        p = tf_team.add_paragraph()
        p.text = m
        p.font.size = Pt(13)
        p.font.color.rgb = RGBColor(255, 255, 255)
        p.space_before = Pt(3)

    guide_box = slide1.shapes.add_textbox(Inches(7.333), Inches(4.5), Inches(5.0), Inches(2.2))
    tf_guide = guide_box.text_frame
    tf_guide.word_wrap = True
    p = tf_guide.paragraphs[0]
    p.text = "UNDER THE GUIDANCE OF:"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD

    p = tf_guide.add_paragraph()
    p.text = "Mr. Vedananda D E"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.space_before = Pt(4)

    p = tf_guide.add_paragraph()
    p.text = "B.E, M.Tech., (Ph.D)\nAssistant Professor, Dept. of CSE\nJawaharlal Nehru New College of Engineering (JNNCE)\nShivamogga - 577204"
    p.font.size = Pt(13)
    p.font.color.rgb = RGBColor(209, 250, 229)
    p.space_before = Pt(3)

    # -------------------------------------------------------------
    # SLIDE 2: Introduction & Problem Identified
    # -------------------------------------------------------------
    slide2 = prs.slides.add_slide(blank_layout)
    add_header(slide2, "Introduction & Problem Identified", "1. BACKGROUND & PROBLEM CONTEXT")

    # Left Card: Importance of Agriculture
    box2_1 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    box2_1.fill.solid()
    box2_1.fill.fore_color.rgb = CARD_BG
    box2_1.line.color.rgb = BORDER_COLOR
    tf2_1 = box2_1.text_frame
    tf2_1.word_wrap = True
    tf2_1.margin_left = tf2_1.margin_right = tf2_1.margin_top = Inches(0.3)
    
    p = tf2_1.paragraphs[0]
    p.text = "The Agricultural Reality in India"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = PRIMARY

    points_left = [
        "Agriculture is the backbone of the Indian economy, supporting over 50% of the country's population.",
        "Farmers face immense uncertainty when making two critical decisions: Which crop to grow? and At what price will it sell?",
        "Crop yield depends on complex interactions: rainfall, temperature, soil nutrients (NPK), pH, season, and irrigation.",
        "Climate change has made traditional experience-based estimations highly inaccurate and vulnerable to crop failure."
    ]
    for pt in points_left:
        p = tf2_1.add_paragraph()
        p.text = "• " + pt
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(10)

    # Right Card: The Price Volatility & Middlemen Crisis
    box2_2 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(1.8), Inches(5.6), Inches(5.0))
    box2_2.fill.solid()
    box2_2.fill.fore_color.rgb = CARD_BG
    box2_2.line.color.rgb = BORDER_COLOR
    tf2_2 = box2_2.text_frame
    tf2_2.word_wrap = True
    tf2_2.margin_left = tf2_2.margin_right = tf2_2.margin_top = Inches(0.3)

    p = tf2_2.paragraphs[0]
    p.text = "Market Price & Economic Dilemma"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD

    points_right = [
        "Mandi commodity prices fluctuate wildly based on seasonal arrivals, transportation bottlenecks, and regional supply shocks.",
        "Small and marginal farmers lack timely forward price visibility and are coerced into selling below cost to middlemen.",
        "A wrong crop choice or poorly timed sale leads to heavy financial debt and distress for farming households.",
        "Need: An integrated data-driven platform providing reliable yield AND price forecasts before sowing."
    ]
    for pt in points_right:
        p = tf2_2.add_paragraph()
        p.text = "• " + pt
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(10)

    # -------------------------------------------------------------
    # SLIDE 3: Existing Solutions & Research Gaps
    # -------------------------------------------------------------
    slide3 = prs.slides.add_slide(blank_layout)
    add_header(slide3, "Existing Solutions & Critical Research Gaps", "2. LITERATURE SURVEY & GAPS")

    gap_data = [
        ("Current Platforms", "Agmarknet, eNAM, Kisan Suvidha, and IMD weather advisories offer crop tips and historical rates."),
        ("Isolated Predictions", "Existing ML studies focus ONLY on yield estimation OR price forecasting, never uniting both together."),
        ("Historical vs Forecast", "Most tools only show past or current mandi rates, leaving farmers to guess future market trends at harvest."),
        ("Language Barrier", "Most portals lack regional language support (Kannada), making them inaccessible to rural Karnataka farmers."),
        ("Lack of Localization", "Generalized national models fail to capture district-level soil (ICAR/Soil Health Card) and climate variations.")
    ]

    for idx, (title, desc) in enumerate(gap_data):
        y_pos = 1.8 + idx * 1.0
        card = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(y_pos), Inches(11.733), Inches(0.85))
        card.fill.solid()
        card.fill.fore_color.rgb = RGBColor(254, 242, 242) if idx > 0 else CARD_BG
        card.line.color.rgb = RGBColor(254, 202, 202) if idx > 0 else BORDER_COLOR
        
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = Inches(0.3)
        tf.margin_top = Inches(0.12)

        p = tf.paragraphs[0]
        p.text = f"{idx+1}. {title}: "
        p.font.bold = True
        p.font.size = Pt(14)
        p.font.color.rgb = RGBColor(185, 28, 28) if idx > 0 else PRIMARY

        run = p.add_run()
        run.text = desc
        run.font.bold = False
        run.font.size = Pt(13)
        run.font.color.rgb = TEXT_DARK

    # -------------------------------------------------------------
    # SLIDE 4: Proposed Solution & Key Objectives
    # -------------------------------------------------------------
    slide4 = prs.slides.add_slide(blank_layout)
    add_header(slide4, "Proposed Solution & Project Objectives", "3. SOLUTION & SCOPE")

    # Banner
    sol_banner = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.733), Inches(1.2))
    sol_banner.fill.solid()
    sol_banner.fill.fore_color.rgb = RGBColor(236, 253, 245)
    sol_banner.line.color.rgb = SECONDARY
    tf_sol = sol_banner.text_frame
    tf_sol.word_wrap = True
    tf_sol.margin_left = tf_sol.margin_right = Inches(0.3)
    tf_sol.margin_top = Inches(0.15)
    
    p = tf_sol.paragraphs[0]
    p.text = "Proposed System: Smart Crop Yield & Price Predictor"
    p.font.bold = True
    p.font.size = Pt(15)
    p.font.color.rgb = PRIMARY
    p = tf_sol.add_paragraph()
    p.text = "An end-to-end AI platform that takes district, crop, season, and land area as inputs to simultaneously predict Yield per Hectare (qtl/ha) and Mandi Modal Price (₹/qtl) to project total net profit and advise on the most profitable crop."
    p.font.size = Pt(12)
    p.font.color.rgb = TEXT_DARK
    p.space_before = Pt(3)

    # 6 Objectives Grid
    obj_box = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(3.2), Inches(11.733), Inches(3.7))
    obj_box.fill.solid()
    obj_box.fill.fore_color.rgb = CARD_BG
    obj_box.line.color.rgb = BORDER_COLOR
    tf_obj = obj_box.text_frame
    tf_obj.word_wrap = True
    tf_obj.margin_left = tf_obj.margin_right = tf_obj.margin_top = Inches(0.3)

    p = tf_obj.paragraphs[0]
    p.text = "Core Objectives (As defined in Synopsis Section 4):"
    p.font.bold = True
    p.font.size = Pt(15)
    p.font.color.rgb = PRIMARY

    objectives = [
        "1. Collect and preprocess historical agricultural, climate, soil, and market price datasets.",
        "2. Develop machine learning models predicting crop yield (quintals/ha) for district and season.",
        "3. Develop time-series deep learning models predicting market modal prices (₹/quintal).",
        "4. Compare multiple regression and sequence algorithms using standard metrics (R², RMSE, MAE, MAPE).",
        "5. Recommend the most profitable crop by combining predicted yield, price, and cultivation economics.",
        "6. Build a simple, user-friendly bilingual interface with complete Kannada language support for rural farmers."
    ]
    for obj in objectives:
        p = tf_obj.add_paragraph()
        p.text = obj
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(6)

    # -------------------------------------------------------------
    # SLIDE 5: Data Sources & Preprocessing Pipeline
    # -------------------------------------------------------------
    slide5 = prs.slides.add_slide(blank_layout)
    add_header(slide5, "Data Sources & Preprocessing Pipeline", "4. DATASET SPECIFICATIONS")

    sources = [
        ("Crop Production Data", "Open Government Data (OGD) Platform India (data.gov.in) and Ministry of Agriculture Directorate of Economics. Historical district crop yields across seasons."),
        ("Weather & Climate Data", "India Meteorological Department (IMD) historical records and daily solar radiation, humidity, precipitation, and temperature from NASA POWER API."),
        ("Soil Nutrient Data", "Soil Health Card portal and ICAR soil survey reports containing district-wise N, P, K fertility indices, and pH ranges across Karnataka agro-climatic zones."),
        ("Market Mandi Rates", "Daily commodity arrivals, modal price benchmarks, and minimum support prices (MSP) from Agmarknet and eNAM electronic markets.")
    ]

    for idx, (s_title, s_desc) in enumerate(sources):
        col = idx % 2
        row = idx // 2
        x = 0.8 + col * 6.0
        y = 1.8 + row * 2.5
        box = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(5.7), Inches(2.3))
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = BORDER_COLOR
        tf = box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = Inches(0.25)
        
        p = tf.paragraphs[0]
        p.text = s_title
        p.font.bold = True
        p.font.size = Pt(15)
        p.font.color.rgb = PRIMARY

        p = tf.add_paragraph()
        p.text = s_desc
        p.font.size = Pt(12)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(6)

    # -------------------------------------------------------------
    # SLIDE 6: Machine Learning Architecture (Section 6)
    # -------------------------------------------------------------
    slide6 = prs.slides.add_slide(blank_layout)
    add_header(slide6, "Machine Learning Modeling Architecture", "5. ML SYSTEM DESIGN")

    # Module A: Yield Prediction
    box6_1 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    box6_1.fill.solid()
    box6_1.fill.fore_color.rgb = CARD_BG
    box6_1.line.color.rgb = SECONDARY
    tf6_1 = box6_1.text_frame
    tf6_1.word_wrap = True
    tf6_1.margin_left = tf6_1.margin_right = tf6_1.margin_top = Inches(0.3)

    p = tf6_1.paragraphs[0]
    p.text = "Module A: Yield Prediction (Regression)"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = PRIMARY

    yield_pts = [
        "Objective: Predict yield in quintals per hectare for given district, crop, season, and soil.",
        "Algorithms Compared: Random Forest Regressor, Gradient Boosting (XGBoost), and Linear Regression (Baseline).",
        "Why Tree-Based Ensembles?: They handle non-linear relationships, multi-collinearity, and feature interactions between rainfall deficit and soil nutrient imbalances exceptionally well.",
        "Feature Importance Output: Quantifies the contribution of each agronomic factor toward final harvest."
    ]
    for pt in yield_pts:
        p = tf6_1.add_paragraph()
        p.text = "• " + pt
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(8)

    # Module B: Price Forecasting
    box6_2 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(1.8), Inches(5.6), Inches(5.0))
    box6_2.fill.solid()
    box6_2.fill.fore_color.rgb = CARD_BG
    box6_2.line.color.rgb = ACCENT_GOLD
    tf6_2 = box6_2.text_frame
    tf6_2.word_wrap = True
    tf6_2.margin_left = tf6_2.margin_right = tf6_2.margin_top = Inches(0.3)

    p = tf6_2.paragraphs[0]
    p.text = "Module B: Price Prediction (Time-Series)"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD

    price_pts = [
        "Objective: Forecast future modal prices (₹/quintal) for the upcoming harvest selling window.",
        "Algorithms Compared: Long Short-Term Memory (LSTM) Recurrent Neural Network vs ARIMA (2,1,2).",
        "Why LSTM Deep Learning?: Commodity prices have memory and cyclical seasonality. LSTMs remember historical mandi price sequences over a 24-month lookback window.",
        "Outcome: Provides future expected modal price, confidence bands, and optimal selling month."
    ]
    for pt in price_pts:
        p = tf6_2.add_paragraph()
        p.text = "• " + pt
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(8)

    # -------------------------------------------------------------
    # SLIDE 7: Model Comparison & Evaluation Results
    # -------------------------------------------------------------
    slide7 = prs.slides.add_slide(blank_layout)
    add_header(slide7, "Comparative Evaluation & Benchmark Results", "6. EXPERIMENTAL RESULTS")

    # Table 1: Yield Models
    t_box1 = slide7.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(5.6), Inches(0.5))
    t_box1.text_frame.paragraphs[0].text = "Yield Prediction Models (Regression)"
    t_box1.text_frame.paragraphs[0].font.bold = True
    t_box1.text_frame.paragraphs[0].font.size = Pt(14)
    t_box1.text_frame.paragraphs[0].font.color.rgb = PRIMARY

    table_shape1 = slide7.shapes.add_table(4, 4, Inches(0.8), Inches(2.3), Inches(5.6), Inches(2.2))
    table1 = table_shape1.table
    table1.columns[0].width = Inches(2.2)
    table1.columns[1].width = Inches(1.1)
    table1.columns[2].width = Inches(1.1)
    table1.columns[3].width = Inches(1.2)

    headers1 = ["Algorithm", "R² Score", "RMSE", "Status"]
    for c, h in enumerate(headers1):
        cell = table1.cell(0, c)
        cell.text = h
        cell.fill.solid()
        cell.fill.fore_color.rgb = PRIMARY
        for p in cell.text_frame.paragraphs:
            p.font.bold = True
            p.font.size = Pt(11)
            p.font.color.rgb = RGBColor(255, 255, 255)

    data1 = [
        ("Random Forest", "0.934", "3.84 qtl", "Selected (Best)"),
        ("XGBoost Regressor", "0.918", "4.28 qtl", "High Accuracy"),
        ("Linear Regression", "0.742", "8.76 qtl", "Baseline")
    ]
    for r, row in enumerate(data1):
        for c, val in enumerate(row):
            cell = table1.cell(r + 1, c)
            cell.text = val
            for p in cell.text_frame.paragraphs:
                p.font.size = Pt(11)
                p.font.color.rgb = TEXT_DARK
                if c == 1 and r == 0:
                    p.font.bold = True
                    p.font.color.rgb = SECONDARY

    # Table 2: Price Models
    t_box2 = slide7.shapes.add_textbox(Inches(6.9), Inches(1.8), Inches(5.6), Inches(0.5))
    t_box2.text_frame.paragraphs[0].text = "Price Forecasting Models (Time-Series)"
    t_box2.text_frame.paragraphs[0].font.bold = True
    t_box2.text_frame.paragraphs[0].font.size = Pt(14)
    t_box2.text_frame.paragraphs[0].font.color.rgb = ACCENT_GOLD

    table_shape2 = slide7.shapes.add_table(3, 4, Inches(6.9), Inches(2.3), Inches(5.6), Inches(1.7))
    table2 = table_shape2.table
    table2.columns[0].width = Inches(2.2)
    table2.columns[1].width = Inches(1.1)
    table2.columns[2].width = Inches(1.1)
    table2.columns[3].width = Inches(1.2)

    headers2 = ["Algorithm", "MAPE (%)", "RMSE", "Status"]
    for c, h in enumerate(headers2):
        cell = table2.cell(0, c)
        cell.text = h
        cell.fill.solid()
        cell.fill.fore_color.rgb = ACCENT_GOLD
        for p in cell.text_frame.paragraphs:
            p.font.bold = True
            p.font.size = Pt(11)
            p.font.color.rgb = RGBColor(255, 255, 255)

    data2 = [
        ("LSTM Neural Net", "4.2%", "₹138.4", "Selected (Best)"),
        ("ARIMA (2,1,2)", "7.8%", "₹214.8", "Traditional")
    ]
    for r, row in enumerate(data2):
        for c, val in enumerate(row):
            cell = table2.cell(r + 1, c)
            cell.text = val
            for p in cell.text_frame.paragraphs:
                p.font.size = Pt(11)
                p.font.color.rgb = TEXT_DARK
                if c == 1 and r == 0:
                    p.font.bold = True
                    p.font.color.rgb = SECONDARY

    # Feature Importance Summary Card at bottom
    feat_card = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.8), Inches(11.733), Inches(2.0))
    feat_card.fill.solid()
    feat_card.fill.fore_color.rgb = CARD_BG
    feat_card.line.color.rgb = BORDER_COLOR
    tf_f = feat_card.text_frame
    tf_f.word_wrap = True
    tf_f.margin_left = tf_f.margin_right = Inches(0.3)
    tf_f.margin_top = Inches(0.15)

    p = tf_f.paragraphs[0]
    p.text = "Random Forest Feature Importance Analysis:"
    p.font.bold = True
    p.font.size = Pt(14)
    p.font.color.rgb = PRIMARY

    p = tf_f.add_paragraph()
    p.text = "• Annual/Seasonal Rainfall: 28.5% | • Soil Nitrogen (N): 21.4% | • Mean Temperature: 16.8%"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = SECONDARY
    p.space_before = Pt(4)

    p = tf_f.add_paragraph()
    p.text = "• Soil Potassium (K): 13.2% | • Soil Phosphorus (P): 11.5% | • Soil pH Level: 8.6%"
    p.font.size = Pt(12)
    p.font.color.rgb = TEXT_DARK
    p.space_before = Pt(2)

    p = tf_f.add_paragraph()
    p.text = "Key Takeaway: Rainfall volume and available Nitrogen are the primary determinants of yield variance, validating the need for localized micro-climate inputs."
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(4)

    # -------------------------------------------------------------
    # SLIDE 8: Key Features of the Web Application
    # -------------------------------------------------------------
    slide8 = prs.slides.add_slide(blank_layout)
    add_header(slide8, "Key Features of the Developed Web Application", "7. PRODUCT & FEATURES")

    features = [
        ("Dual Yield & Price Predictor", "Accepts district, crop, season, and land area (Acres/Hectares). Auto-syncs district Soil Health Card benchmarks and IMD weather data with fine-tune sliders."),
        ("Financial Economics & Profit Breakdown", "Computes Gross Revenue, Total Cost of Cultivation, Expected Net Profit, ROI %, and Break-Even Price buffer to minimize financial risk."),
        ("Best Crop Profitability Recommender", "Runs simultaneous ML simulations across all candidate crops for the district, ranking them by net return and generating visual comparison charts."),
        ("Live APMC Mandi Tickers & LSTM Curves", "Displays real-time market arrivals across Karnataka mandis (Shivamogga, Belagavi, Davanagere, etc.) and plots 12-mo past vs 6-mo LSTM forward forecasts."),
        ("Bilingual English & Kannada (ಕನ್ನಡ) UI", "Instant language toggle with authentic Kannada agricultural terminology so rural farmers can navigate without language friction."),
        ("Printable Kisan Advisory Card", "Generates an official formatted advisory report with verification badges ready for printing for banks, cooperatives, and APMC yards.")
    ]

    for idx, (f_title, f_desc) in enumerate(features):
        col = idx % 2
        row = idx // 2
        x = 0.8 + col * 6.0
        y = 1.8 + row * 1.7
        box = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(5.7), Inches(1.5))
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = BORDER_COLOR
        tf = box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.2)
        tf.margin_top = Inches(0.12)

        p = tf.paragraphs[0]
        p.text = f_title
        p.font.bold = True
        p.font.size = Pt(13)
        p.font.color.rgb = PRIMARY

        p = tf.add_paragraph()
        p.text = f_desc
        p.font.size = Pt(11)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(3)

    # -------------------------------------------------------------
    # SLIDE 9: Expected Outcomes & Academic Impact (Section 7)
    # -------------------------------------------------------------
    slide9 = prs.slides.add_slide(blank_layout)
    add_header(slide9, "Expected Outcomes & Academic Roadmap", "8. OUTCOMES & RELEVANCE")

    outcomes = [
        ("Product Deployment", "A responsive web application accessible on both desktop and mobile devices for rural farmers and agri-extension officers."),
        ("Measurable Accuracy", "Rigorous statistical validation demonstrating R² of 0.934 for Random Forest yield regression and 4.2% MAPE for LSTM price forecasts."),
        ("Project Exhibitions & Hackathons", "Targeted for demonstrations at departmental/college exhibitions, Smart India Hackathon (SIH), and KSCST Student Project Programme."),
        ("Funding Grants", "Applying for student project funding and grants from KSCST and allied agricultural research councils to enhance sensor integrations."),
        ("Research Publications", "Drafting a comparative research paper on dual ML forecasting for submission to international conferences/journals."),
        ("Real-World Adoption", "Collaborations planned with Krishi Vigyan Kendras (KVK), local farmer producer organizations (FPOs), and agri-startups.")
    ]

    for idx, (o_title, o_desc) in enumerate(outcomes):
        col = idx % 3
        row = idx // 3
        x = 0.8 + col * 4.0
        y = 1.8 + row * 2.5
        box = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(3.7), Inches(2.3))
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = BORDER_COLOR
        tf = box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.2)
        tf.margin_top = Inches(0.15)

        p = tf.paragraphs[0]
        p.text = o_title
        p.font.bold = True
        p.font.size = Pt(14)
        p.font.color.rgb = PRIMARY

        p = tf.add_paragraph()
        p.text = o_desc
        p.font.size = Pt(11)
        p.font.color.rgb = TEXT_DARK
        p.space_before = Pt(4)

    # -------------------------------------------------------------
    # SLIDE 10: Conclusion & Thank You (Dark Theme)
    # -------------------------------------------------------------
    slide10 = prs.slides.add_slide(blank_layout)
    bg10 = slide10.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg10.fill.solid()
    bg10.fill.fore_color.rgb = PRIMARY
    bg10.line.color.rgb = PRIMARY

    c_box = slide10.shapes.add_textbox(Inches(1.5), Inches(1.5), Inches(10.333), Inches(4.5))
    tf10 = c_box.text_frame
    tf10.word_wrap = True

    p = tf10.paragraphs[0]
    p.text = "CONCLUSION & IMPACT"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD
    p.alignment = PP_ALIGN.CENTER

    p = tf10.add_paragraph()
    p.text = "Empowering Indian Farmers with Predictive AI Intelligence"
    p.font.size = Pt(28)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.alignment = PP_ALIGN.CENTER
    p.space_before = Pt(6)

    p = tf10.add_paragraph()
    p.text = "By replacing guesswork with empirical machine learning models for yield and deep learning time-series for market prices, the Smart Crop Yield and Price Predictor safeguards rural livelihoods, promotes sustainable land usage, and protects farmers from market volatility."
    p.font.size = Pt(15)
    p.font.color.rgb = RGBColor(209, 250, 229)
    p.alignment = PP_ALIGN.CENTER
    p.space_before = Pt(16)

    p = tf10.add_paragraph()
    p.text = "Thank You! Questions & Discussion"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GOLD
    p.alignment = PP_ALIGN.CENTER
    p.space_before = Pt(24)

    p = tf10.add_paragraph()
    p.text = "Batch No: A2 | Dept. of CSE | JNNCE Shivamogga | VTU Belagavi"
    p.font.size = Pt(13)
    p.font.color.rgb = RGBColor(255, 255, 255)
    p.alignment = PP_ALIGN.CENTER
    p.space_before = Pt(8)

    prs.save(output_path)
    print(f"Presentation successfully created at: {output_path}")

if __name__ == '__main__':
    out_file = os.path.join(os.path.dirname(__file__), 'Smart_Crop_Predictor_Presentation.pptx')
    create_presentation(out_file)
