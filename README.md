# QSS20 Final Project — Milestone 2

**Course:** QSS20
**Term:** Spring 2026
**Author:** Aulanni Kidd

---

## Overview

This project examines digital health exclusion among Kenyan women ages 15–49 using data from the Kenya 2022 Demographic and Health Survey (DHS). The analysis investigates how wealth, education, geographical residence, and age predict phone ownership and internet use. These outcomes were chosen to represent two important factors of digital access that shape whether women can benefit from digital health services.

**Research question:** Do maternal health interventions disproportionately exclude marginalized women? And within this question, I will also be answering whether wealth, education, or geography is the strongest predictor of digital exclusion, and does that change depending on whether you are measuring phone ownership or internet use. 

**Preliminary findings:**
- Overall phone ownership is 74.7% while overall internet use is 36.9%, revealing a wide access gap between owning a device and using it for connectivity.
- Internet use rises sharply with wealth, from 5.4% in the poorest quintile to 79.5% in the richest.
- Education is the strongest predictor of internet use: women with higher education are far more likely to use the internet than those with no education (90.9% vs. 4.9%).
- Urban women have significantly higher access than rural women: 85.0% vs. 68.4% for phone ownership and 56.9% vs. 24.3% for internet use.

---

## Data

The source data is the Kenya 2022 DHS Individual Recode, a nationally representative survey of women ages 15–49 (n = 32,156). The full dataset is too large for GitHub and is available on Google Drive: [link](https://drive.google.com/drive/folders/1TUfQTLaBA53fSFCMN9icqbCyA7IO_fYy?usp=sharing).

A cleaned analysis file (analysis_data.csv) is produced in 00_load_data.ipynb and used by all other notebooks.


**Variables used:**

Variable - DHS Code - Description 

phone_owns - v169a - Owns a mobile telephone (0/1) 
internet_use - v171a - Uses the internet (0/1) 
wealth_quintile - v190 - Wealth index quintile (1=poorest, 5=richest) 
education - v106 - Highest education level (None / Primary / Secondary / Higher) |
urban_rural - v025 - Place of residence (Urban / Rural) 
maternal_age - v012 - Respondent's current age 

---

## Code

All scripts are in the code/ directory.

### [code/00_load_data.ipynb](code/00_load_data.ipynb)
Loads the raw DHS file, selects the seven variablesn for analysis, recodes outcomes (phone_owns, internet_use), drops missing values, and saves the cleaned dataset to analysis_data.csv.

### [code/01_descriptive_stats.ipynb](code/01_descriptive_stats.ipynb)
Loads analysis_data.csv and produces descriptive statistics and bar chart visualizations of phone ownership and internet use broken down by:
- Wealth quintile
- Education level
- Urban/rural residence

Figures are saved to output/:
- phone_vs_internet_wealth.png
- phone_vs_internet_urban_rural.png

### [code/02_regressions.ipynb](code/02_regressions.ipynb)
Runs logistic regression models predicting phone ownership and internet use from wealth, education, urban/rural residence, and age. Results are reported as odds ratios with 95% confidence intervals. Predicted probabilities are computed across wealth quintiles with rural women with primary education as the reference. 

Figure saved to output/:
- predicted_probs.png

---

