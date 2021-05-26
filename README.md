# PlanApp

Please input the Plan details in the following json format:
# Remrk
"PlanItems" is all the offer items among all plans.
"PlanOptions" includes all the plans.
"items" inside "PlanOptions" represent the offer items provided by this plan.

# Demo Plan Input format
demoPlanInput = {
  PlanItems: ['General', 'Specialist', 'Physiotherapy'],
  PlanOptions: [
    {
      id: 1,
      name: 'Standard Plan',
      items: ['General'],
      currency: 'HK$',
      price: 0,
      timeInterval: 'Monthly',
    },
    {
      id: 2,
      name: 'Premium Plan',
      items: ['General', 'Specialist', 'Physiotherapy'],
      currency: 'HK$',
      price: 388,
      timeInterval: 'Monthly',
    },
  ] 
}

