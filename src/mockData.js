export const mockProducts = [
    {
        id: 1,
        name: "ATmega328P",
        category: "Microcontrollers",
        price: 150,
        stock: 10,
        image: "ATmega328P.jpg",
        description_tr: "8-bit AVR Mikrodenetleyici",
        description_en: "8-bit AVR Microcontroller",
        datasheet: "https://www.microchip.com/datasheet/ATmega328P"
    },
    {
        id: 2,
        name: "AMS1117-5.0",
        category: "Regulators",
        price: 15,
        stock: 50,
        image: "AMS1117-5.0 Voltaj Regülatörü.jpg",
        description_tr: "5.0V LDO Voltaj Regülatörü",
        description_en: "5.0V LDO Voltage Regulator",
        datasheet: "http://www.advanced-monolithic.com/pdf/ds1117.pdf"
    },
    {
        id: 3,
        name: "ESP32-PICO-D4",
        category: "Microcontrollers",
        price: 250,
        stock: 15,
        image: "ESP32-PICO-D4.jpg",
        description_tr: "Wi-Fi ve Bluetooth Modülü",
        description_en: "Wi-Fi and Bluetooth Module",
        datasheet: "https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf"
    },
    {
        id: 4,
        name: "NRF24L01+ RF Modül",
        category: "Wireless",
        price: 45,
        stock: 25,
        image: "NRF24L01+RF_Modül.jpg",
        description_tr: "2.4GHz RF Alıcı-Verici Modül",
        description_en: "2.4GHz RF Transceiver Module",
        datasheet: "https://www.nordicsemi.com/Products/nRF24-series"
    },
    {
        id: 5,
        name: "STM32F103C8T6",
        category: "Microcontrollers",
        price: 180,
        stock: 12,
        image: "STM32F103C8T6.jpg",
        description_tr: "ARM Cortex-M3 Mikrodenetleyici (Blue Pill)",
        description_en: "ARM Cortex-M3 Microcontroller (Blue Pill)",
        datasheet: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html"
    },
    {
        id: 6,
        name: "CH340G USB-Serial",
        category: "Converters",
        price: 35,
        stock: 30,
        image: "CH340G_USB‑Serial_Çevirici.jpg",
        description_tr: "USB'den Seriye Dönüştürücü",
        description_en: "USB to Serial Converter",
        datasheet: "http://www.wch-ic.com/downloads/CH340DS1_PDF.html"
    },
    {
        id: 7,
        name: "Tactile Push Button",
        category: "Buttons",
        price: 5,
        stock: 100,
        image: "Tactile_Push_Button.jpg",
        description_tr: "4-pin 6x6x5mm Tactile Buton",
        description_en: "4-pin 6x6x5mm Tactile Button",
        datasheet: ""
    },
    {
        id: 8,
        name: "XL4015 Buck Converter",
        category: "Regulators",
        price: 85,
        stock: 8,
        image: "XL4015_DC‑DC_Buck_Dönüştürücü.jpg",
        description_tr: "DC-DC Ayarlanabilir Step-Down Modülü",
        description_en: "DC-DC Adjustable Step-Down Module",
        datasheet: ""
    }
];

export const mockUsers = [
    {
        username: "admin",
        password: "123",
        role: "admin",
        email: "admin@nexora.com"
    },
    {
        username: "user",
        password: "123",
        role: "viewer",
        email: "user@example.com"
    }
];
