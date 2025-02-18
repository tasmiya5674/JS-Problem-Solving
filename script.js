function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
      return "Incorrect PIN";
    }
    
    if (amount > balance) {
      return "Insufficient Funds";
    }
    
    if (amount % 100 !== 0) {
      return "Enter amount in multiples of 100";
    }
    
    balance -= amount;
    return `Withdrawal successful. New balance: ${balance}`;
  }
  
  // Example usage
  const balance = 1000;
  const amount = 500;
  const pin = 1234;
  const enteredPin = 1234;
  
  console.log(atmWithdrawal(balance, amount, pin, enteredPin));  // Output: "Withdrawal successful. New balance: 500"

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    // Calculate discount
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500 && orderAmount <= 1000) {
        discount = 0.10;
    }

    let discountedAmount = orderAmount - (orderAmount * discount);

    // Calculate shipping
    if (discountedAmount > 50) {
        shipping = 0; // Free shipping
    } else {
        shipping = 10; // Express shipping
    }

    let finalAmount = discountedAmount + shipping;
    return finalAmount;
}

function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5; // Add 5 extra marks for high attendance
    }

    let grade;

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

function trafficLightControl(density) {
    let greenDuration;

    switch (density) {
        case "Heavy Traffic":
            greenDuration = 60;
            break;
        case "Moderate Traffic":
            greenDuration = 40;
            break;
        case "Light Traffic":
            greenDuration = 20;
            break;
        default:
            greenDuration = 0; // default case if density is not recognized
    }

    return greenDuration;
}

function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let finalPrice = standardPrice;

    const isMatinee = showTime < 17; // 5 PM is 17:00 in 24-hour format

    if (age < 12) {
        finalPrice *= 0.60; // 40% discount for children
    } else if (age > 60) {
        finalPrice *= 0.70; // 30% discount for senior citizens
    } else if (isMatinee) {
        finalPrice *= 0.80; // 20% discount for matinee shows
    }

    return finalPrice;
}

function isEligibleForJob(age, experience, qualification) {
    const minimumAge = 21;
    const maximumAge = 55;
    const minimumExperience = 2;
    const requiredQualification = "Bachelor's Degree";

    const hasValidAge = age >= minimumAge && age <= maximumAge;
    const hasEnoughExperience = experience >= minimumExperience;
    const hasRequiredQualification = qualification === requiredQualification;

    return hasValidAge && hasEnoughExperience && hasRequiredQualification;
}

function applyCoupon(orderAmount, couponCode) {
    let finalPrice = orderAmount;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalPrice = orderAmount * 0.90; // Apply 10% discount
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        finalPrice = orderAmount; // No change, free shipping assumed to be handled separately
    }

    return finalPrice;
}

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP") {
        return "VIP";
    } else if (planType === "Premium" || (planType === "Basic" && wantsTrainer)) {
        return "Premium";
    } else if (planType === "Basic" && !wantsTrainer && !wantsDietPlan) {
        return "Basic";
    } else {
        return "VIP"; // default to VIP if diet plan is desired
    }
}
function calculateElectricityBill(units, timeOfDay) {
        let rate = 0;
    
        // Determine the rate based on units consumed
        if (units <= 100) {
            rate = 5;
        } else if (units <= 300) {
            rate = 4;
        } else {
            rate = 3;
        }
    
        // Calculate total bill for normal hours
        let totalBill = units * rate;
    
        // Apply extra charge for peak hours
        if (timeOfDay === 'Peak') {
            totalBill += totalBill * 0.10; // Extra 10% charge
        }
    
        return totalBill;
    }
    
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
        const baseFare = 300;
        let additionalCharges = 0;
        let discount = 0;
    
        // Determine additional charges based on class type
        if (classType === 'Business') {
            additionalCharges += 200;
        } else if (classType === 'First') {
            additionalCharges += 500;
        }
    
        // Determine additional charges based on luggage weight
        if (luggageWeight > 20) {
            additionalCharges += Math.ceil((luggageWeight - 20) / 10) * 50;
        }
    
        // Determine discount
        if (isStudent) {
            discount = 0.15;
        } else if (isSenior) {
            discount = 0.10;
        }
    
        // Calculate final price
        let finalPrice = baseFare + additionalCharges;
        finalPrice -= finalPrice * discount;
    
        return finalPrice;
    }
    
   