<?php
// Define the multidimensional array
$world = [
    "Africa" => [
        "Kenya" => [
            "Nairobi",
            "Bomet",
            "Kisumu",
            "Uasin Gishu",
            "Baringo"
        ],
        "Nigeria" => [
            "Lagos",
            "Abuja",
            "Kano",
            "Ibadan",
            "Port Harcourt"
        ],
        "South Africa" => [
            "Gauteng",
            "KwaZulu-Natal",
            "Eastern Cape",
            "Western Cape",
            "Free State"
        ],
        "Egypt" => [
            "Cairo",
            "Alexandria",
            "Giza",
            "Luxor",
            "Aswan"
        ]
    ],
    "Asia" => [
        "China" => [
            "Beijing",
            "Shanghai",
            "Shenzhen",
            "Guangzhou",
            "Chengdu"
        ],
        "India" => [
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Ahmedabad"
        ]
    ],
    "Europe" => [
        "United Kingdom" => [
            "London",
            "Manchester",
            "Birmingham",
            "Leeds",
            "Glasgow"
        ],
        "France" => [
            "Paris",
            "Lyon",
            "Marseille",
            "Toulouse",
            "Nice"
        ]
    ],
    "North America" => [
        "United States" => [
            "California",
            "Texas",
            "Florida",
            "New York",
            "Illinois"
        ],
        "Canada" => [
            "Ontario",
            "Quebec",
            "British Columbia",
            "Alberta",
            "Manitoba"
        ]
    ],
    "South America" => [
        "Brazil" => [
            "Sao Paulo",
            "Rio de Janeiro",
            "Brasilia",
            "Salvador",
            "Fortaleza"
        ]
    ]
];

// Display Kenya's counties in Africa
echo "Counties in Kenya  located in continent (Africa):\n";
foreach ($world["Africa"]["Kenya"] as $county) {
    echo "- $county\n";
}

?>
