const data = [
    { Gender: "Male", HeightCm: 171, WeightKg: 96 },
    { Gender: "Male", HeightCm: 161, WeightKg: 85 },
    { Gender: "Male", HeightCm: 180, WeightKg: 77 },
    { Gender: "Female", HeightCm: 166, WeightKg: 62 },
    { Gender: "Female", HeightCm: 150, WeightKg: 70 },
    { Gender: "Female", HeightCm: 167, WeightKg: 82 },
  ];
  
  let overWeight = 0;
  function calculateBMI() {
    this.BMI = Math.round(
      this.WeightKg / (((this.HeightCm / 100) * this.HeightCm) / 100)
    );
  
    if (this.BMI <= 18.4) {
      this.BMICategory = "Underweight";
      this.HealthRisk = "Malnutrition Risk";
    } else if (this.BMI <= 24.9) {
      this.BMICategory = "Normal Weight";
      this.HealthRisk = "Low Risk";
    } else if (this.BMI <= 29.9) {
      this.BMICategory = "Overweight";
      this.HealthRisk = "Enhanced Risk";
      overWeight++;
    } else if (this.BMI <= 34.9) {
      this.BMICategory = "Moderatly Obese";
      this.HealthRisk = "Medium Risk";
      overWeight++;
    } else if (this.BMI <= 39.9) {
      this.BMICategory = "Severly Obese";
      this.HealthRisk = "High Risk";
      overWeight++;
    } else {
      this.BMICategory = "Very Severly Obese";
      this.HealthRisk = "Very High Risk";
      overWeight++;
    }
  }
  
  for (let i = 0; i < data.length; i++) {
    calculateBMI.apply(data[i]);
    console.log(data[i]);
  }
  
  console.log("Number of People who are Overweight is: " + overWeight);
  