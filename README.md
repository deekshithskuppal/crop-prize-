# Smart Crop Yield and Price Predictor Using Machine Learning

> **A Mini-Project submitted to Visvesvaraya Technological University (VTU), Belagavi**  
> In partial fulfillment of the requirement for the award of Bachelor of Engineering in Computer Science & Engineering  
> **Department of Computer Science & Engineering**  
> **Jawaharlal Nehru New College of Engineering (JNNCE), Shivamogga - 577204**  
> **Project Batch No:** A2 | **Date:** October 2026  

---

### Project Team (Batch A2)
| Sl. No | Student Name | University Seat Number (USN) |
|---|---|---|
| 1 | **Chetan R Naik** | `4JN24CS031` |
| 2 | **Deekshith S Kuppal** | `4JN24CS040` |
| 3 | **Ichith M** | `4JN24CS060` |
| 4 | **Pavan Kumar J R** | `4JN24CS197` |

**Project Guide:**  
**Mr. Vedananda D E**, B.E, M.Tech., (Ph.D)  
*Assistant Professor, Department of Computer Science & Engineering, JNNCE Shivamogga*

---

## 🌾 Project Overview

Existing agricultural advisory systems (Agmarknet, eNAM, IMD, Kisan Suvidha) operate in silos—either providing historical mandi prices or localized weather forecasts, but failing to unite **both yield prediction and price forecasting** into a single financial decision-support tool. Furthermore, most systems lack regional language (Kannada) support and district-level soil calibration.

**Smart Crop Yield and Price Predictor** solves this gap by integrating:
1. **Multi-Variable Yield Regression Engine** (Random Forest Regressor & XGBoost vs. Linear Regression baseline) trained on rainfall, temperature, humidity, and soil N-P-K & pH parameters.
2. **Time-Series Deep Learning Price Forecasting Engine** (LSTM Neural Network vs. ARIMA baseline) using historical mandi arrival sequences from Agmarknet & eNAM.
3. **Financial Economic Profitability Engine** computing Gross Revenue, Cultivation Cost, Expected Net Profit, and ROI (%).
4. **Best Crop Recommender** ranking all crops for a given district and season by net return.
5. **Bilingual Regional Interface** with full English and Kannada (ಕನ್ನಡ) language support.
6. **Printable Kisan Advisory Card** for farmers to take to banks, cooperatives, or mandi yards.

---

## 🔬 Machine Learning Evaluation (Synopsis Sections 6 & 7)

### 1. Yield Prediction Regression Models
| Model Algorithm | R² Score | RMSE (qtl/ha) | MAE (qtl/ha) | Status |
|---|---|---|---|---|
| **Random Forest Regressor** | **0.934** | **3.84** | **2.62** | **Selected (Best Performer)** |
| **Gradient Boosting (XGBoost)** | 0.918 | 4.28 | 3.05 | High Accuracy |
| **Linear Regression (Baseline)** | 0.742 | 8.76 | 6.54 | Baseline |

### 2. Market Price Time-Series Forecasting Models
| Model Algorithm | MAPE (%) | RMSE (₹/qtl) | MAE (₹/qtl) | Status |
|---|---|---|---|---|
| **LSTM Neural Network (24-mo seq)** | **4.2%** | **₹138.4** | **₹96.2** | **Selected (Best Forecaster)** |
| **ARIMA (2,1,2)** | 7.8% | ₹214.8 | ₹158.0 | Traditional Statistical |

### 3. Random Forest Feature Importance
- **Annual / Seasonal Rainfall:** 28.5%
- **Soil Nitrogen (N):** 21.4%
- **Mean Temperature (°C):** 16.8%
- **Soil Potassium (K):** 13.2%
- **Soil Phosphorus (P):** 11.5%
- **Soil pH Level:** 8.6%

---

## 🚀 Key Modules & Capabilities

1. **Dual Predictor:**
   - Input: State, District, Target Crop, Season, Land Area (Acres/Hectares).
   - District Benchmark Auto-Sync: Preloads soil (N, P, K, pH) and weather (Rainfall, Temp, Humidity) from ICAR / Soil Health Card.
   - Fine-tune Sliders for custom laboratory soil test readings.
   - Dual Outputs: Yield (qtl/ha, total quintals, tonnes) + Market Modal Price (₹/qtl, range, MSP gain).
   - Profitability: Gross Revenue, Total Cultivation Cost, Expected Net Profit, ROI %, Break-Even Price.

2. **Crop Profitability Recommender:**
   - Evaluates all candidate crops for the chosen district and season.
   - Highlights the #1 Recommended Crop with maximum net return.
   - Interactive Bar Chart comparing Net Profit vs Cultivation Cost across candidate crops.
   - Detailed ranking matrix with ROI, suitability scores, and 1-click analysis.

3. **Live APMC Mandi Rates & Trends:**
   - Live ticker and directory of Karnataka APMC Mandis (Shivamogga, Belagavi, Davanagere, Kolar, Kalaburagi, Hubballi, Mysuru).
   - 12-Month Past Mandi Prices vs 6-Month LSTM Future Projection line graph with ARIMA comparison and MSP benchmark lines.
   - Seasonal market arrival and peak price window advisories.

4. **Model Research & Academic Validation:**
   - Comprehensive comparative tables matching Synopsis Sections 6 & 7.
   - Interactive Feature Importance horizontal bar chart.
   - End-to-end 5-step ML pipeline flow.

5. **VTU Project Synopsis Modal:**
   - Interactive popup displaying the full submitted synopsis document, college details, guide, problem statement, objectives, and expected outcomes.

6. **Printable Kisan Advisory Card:**
   - Clean, official-style report formatted for printing (`Ctrl+P` / `window.print()`).

---

## 🛠️ Tech Stack

- **Frontend & UI:** React 18, Vite, Tailwind CSS, Lucide React Icons, Canvas Confetti
- **Data Visualizations:** Recharts (ComposedChart, AreaChart, LineChart, BarChart)
- **Internationalization:** Bilingual English & Kannada (Noto Sans Kannada)
- **Data Sources Integrated:** Open Government Data (data.gov.in), Agmarknet, eNAM, IMD, NASA POWER API, ICAR Soil Health Card

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---
*Developed with pride by JNNCE CSE Batch A2 for Visvesvaraya Technological University (VTU) Belagavi.*
