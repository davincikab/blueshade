const plots = {
    "aXpda": {
      "plot_name": "Viva Complex",
      "location": "Kayole, near Kasoko",
      "type": "Storey Building",
      "lat": "0.98789",
      "lng": "37.87778",
      "owner": "Mwangi Fauru",
      "serivces": [
        {
          "electricity": {
            "type": "token"
          },
          "water": {},
          "waste_management": {
            "payment": "100"
          },
          "security": []
        }
      ],
      "ammenities_nearby": [
        {
          "schools": [],
          "health_facility": [],
          "market": [
            {
              "name": "kasoko",
              "location": "POINT ()"
            },
            {
              "name": "kasoko",
              "location": "POINT ()"
            }
          ]
        }
      ],
      "property_types": [
        "Single",
        "Double",
        "One bedroom",
        "two bedroom",
        ""
      ]
    }
};

const houses = {
  "pKdfhf": {
    "type": "One bedroom",
    "title": "One bedroom in Kayole",
    "cost": "12000",
    "is_occupied": "true",
    "plot_id": "aXpda",
    "lat": 0.98789,
    "lng": 37.87778,
    "reviews":[
      {"rating": 4, "text":""},
      {"rating": 3.6, "text":""},
    ],
    "ammenity":{
      "bedroom":1,
      "bath":1,
      "electricity":"Token"
    }
  },
  "dpKdhf": {
    "type": "Two bedroom",
    "title": "Maryland Two bedroom apartment",
    "cost": "18000",
    "lat": 0.98789,
    "lng": 37.87778,
    "is_occupied": "true",
    "plot_id": "aXpda",
    "reviews":[
      {"rating": 4, "text":""},
      {"rating": 4.5, "text":""},
      {"rating": 2.1, "text":""},
      {"rating": 3.4, "text":""},
    ],
    "ammenity":{
      "bedroom":1,
      "bath":1,
      "electricity":"Token"
    }
  }
}

const tenants = {
    "pKdfhf": {
      "id_number": "35908766",
      "phone_number": "0789765434",
      "name": "Mwangi Mwas",
      "unit_number": "C4",
      "plot_name": "Viva Complex",
      "house_type": "One bedroom",
      "is_active": "true",
      "is_rent_paid": "true,",
      "plot_id": "aXpda"
    }
};

const rent_payment = {
    "zahA2d": {
      "amount": "12000",
      "date": "2021-02-20T07:34:12.001Z",
      "tenant_id": "pKdfhf",
      "plot_id": "aXpda",
      "pending_balance": "0"
    }
}

export { houses, plots, rent_payment, tenants};