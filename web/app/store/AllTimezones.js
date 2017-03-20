/*
 * Copyright 2017 Anton Tananaev (anton@traccar.org)
 * Copyright 2017 Andrey Kunitsyn (andrey@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
Ext.define('Traccar.store.AllTimezones', {
    extend: 'Ext.data.Store',
    fields: ['key'],

    sorters: {
        property: 'key',
        direction : 'ASC'
    },

    data: [{
        key: 'Africa/Abidjan'
    }, {
        key: 'Africa/Accra'
    }, {
        key: 'Africa/Bissau'
    }, {
        key: 'Africa/Casablanca'
    }, {
        key: 'Africa/El_Aaiun'
    }, {
        key: 'Africa/Monrovia'
    }, {
        key: 'America/Danmarkshavn'
    }, {
        key: 'Antarctica/Troll'
    }, {
        key: 'Atlantic/Canary'
    }, {
        key: 'Atlantic/Faroe'
    }, {
        key: 'Atlantic/Madeira'
    }, {
        key: 'Atlantic/Reykjavik'
    }, {
        key: 'GMT'
    }, {
        key: 'Etc/GMT'
    }, {
        key: 'Etc/UCT'
    }, {
        key: 'Etc/UTC'
    }, {
        key: 'Europe/Dublin'
    }, {
        key: 'Europe/Lisbon'
    }, {
        key: 'Europe/London'
    }, {
        key: 'WET'
    }, {
        key: 'Africa/Algiers'
    }, {
        key: 'Africa/Ceuta'
    }, {
        key: 'Africa/Lagos'
    }, {
        key: 'Africa/Ndjamena'
    }, {
        key: 'Africa/Tunis'
    }, {
        key: 'Africa/Windhoek'
    }, {
        key: 'CET'
    }, {
        key: 'Etc/GMT-1'
    }, {
        key: 'Europe/Amsterdam'
    }, {
        key: 'Europe/Andorra'
    }, {
        key: 'Europe/Belgrade'
    }, {
        key: 'Europe/Berlin'
    }, {
        key: 'Europe/Brussels'
    }, {
        key: 'Europe/Budapest'
    }, {
        key: 'Europe/Copenhagen'
    }, {
        key: 'Europe/Gibraltar'
    }, {
        key: 'Europe/Luxembourg'
    }, {
        key: 'Europe/Madrid'
    }, {
        key: 'Europe/Malta'
    }, {
        key: 'Europe/Monaco'
    }, {
        key: 'Europe/Oslo'
    }, {
        key: 'Europe/Paris'
    }, {
        key: 'Europe/Prague'
    }, {
        key: 'Europe/Rome'
    }, {
        key: 'Europe/Stockholm'
    }, {
        key: 'Europe/Tirane'
    }, {
        key: 'Europe/Vienna'
    }, {
        key: 'Europe/Warsaw'
    }, {
        key: 'Europe/Zurich'
    }, {
        key: 'MET'
    }, {
        key: 'Africa/Cairo'
    }, {
        key: 'Africa/Johannesburg'
    }, {
        key: 'Africa/Maputo'
    }, {
        key: 'Africa/Tripoli'
    }, {
        key: 'Asia/Amman'
    }, {
        key: 'Asia/Beirut'
    }, {
        key: 'Asia/Damascus'
    }, {
        key: 'Asia/Gaza'
    }, {
        key: 'Asia/Hebron'
    }, {
        key: 'Asia/Jerusalem'
    }, {
        key: 'Asia/Nicosia'
    }, {
        key: 'EET'
    }, {
        key: 'Etc/GMT-2'
    }, {
        key: 'Europe/Athens'
    }, {
        key: 'Europe/Bucharest'
    }, {
        key: 'Europe/Chisinau'
    }, {
        key: 'Europe/Helsinki'
    }, {
        key: 'Europe/Kaliningrad'
    }, {
        key: 'Europe/Kiev'
    }, {
        key: 'Europe/Riga'
    }, {
        key: 'Europe/Sofia'
    }, {
        key: 'Europe/Tallinn'
    }, {
        key: 'Europe/Uzhgorod'
    }, {
        key: 'Europe/Vilnius'
    }, {
        key: 'Europe/Zaporozhye'
    }, {
        key: 'Africa/Khartoum'
    }, {
        key: 'Africa/Nairobi'
    }, {
        key: 'Antarctica/Syowa'
    }, {
        key: 'Asia/Baghdad'
    }, {
        key: 'Asia/Famagusta'
    }, {
        key: 'Asia/Qatar'
    }, {
        key: 'Asia/Riyadh'
    }, {
        key: 'Etc/GMT-3'
    }, {
        key: 'Europe/Istanbul'
    }, {
        key: 'Europe/Kirov'
    }, {
        key: 'Europe/Minsk'
    }, {
        key: 'Europe/Moscow'
    }, {
        key: 'Europe/Simferopol'
    }, {
        key: 'Europe/Volgograd'
    }, {
        key: 'Asia/Tehran'
    }, {
        key: 'Asia/Baku'
    }, {
        key: 'Asia/Dubai'
    }, {
        key: 'Asia/Tbilisi'
    }, {
        key: 'Asia/Yerevan'
    }, {
        key: 'Etc/GMT-4'
    }, {
        key: 'Europe/Astrakhan'
    }, {
        key: 'Europe/Samara'
    }, {
        key: 'Europe/Saratov'
    }, {
        key: 'Europe/Ulyanovsk'
    }, {
        key: 'Indian/Mahe'
    }, {
        key: 'Indian/Mauritius'
    }, {
        key: 'Indian/Reunion'
    }, {
        key: 'Asia/Kabul'
    }, {
        key: 'Antarctica/Mawson'
    }, {
        key: 'Asia/Aqtau'
    }, {
        key: 'Asia/Aqtobe'
    }, {
        key: 'Asia/Ashgabat'
    }, {
        key: 'Asia/Atyrau'
    }, {
        key: 'Asia/Dushanbe'
    }, {
        key: 'Asia/Karachi'
    }, {
        key: 'Asia/Oral'
    }, {
        key: 'Asia/Samarkand'
    }, {
        key: 'Asia/Tashkent'
    }, {
        key: 'Asia/Yekaterinburg'
    }, {
        key: 'Etc/GMT-5'
    }, {
        key: 'Indian/Kerguelen'
    }, {
        key: 'Indian/Maldives'
    }, {
        key: 'Asia/Colombo'
    }, {
        key: 'Asia/Kolkata'
    }, {
        key: 'Asia/Kathmandu'
    }, {
        key: 'Antarctica/Vostok'
    }, {
        key: 'Asia/Almaty'
    }, {
        key: 'Asia/Bishkek'
    }, {
        key: 'Asia/Dhaka'
    }, {
        key: 'Asia/Omsk'
    }, {
        key: 'Asia/Qyzylorda'
    }, {
        key: 'Asia/Thimphu'
    }, {
        key: 'Asia/Urumqi'
    }, {
        key: 'Etc/GMT-6'
    }, {
        key: 'Indian/Chagos'
    }, {
        key: 'Asia/Yangon'
    }, {
        key: 'Indian/Cocos'
    }, {
        key: 'Antarctica/Davis'
    }, {
        key: 'Asia/Bangkok'
    }, {
        key: 'Asia/Barnaul'
    }, {
        key: 'Asia/Ho_Chi_Minh'
    }, {
        key: 'Asia/Hovd'
    }, {
        key: 'Asia/Jakarta'
    }, {
        key: 'Asia/Krasnoyarsk'
    }, {
        key: 'Asia/Novokuznetsk'
    }, {
        key: 'Asia/Novosibirsk'
    }, {
        key: 'Asia/Pontianak'
    }, {
        key: 'Asia/Tomsk'
    }, {
        key: 'Etc/GMT-7'
    }, {
        key: 'Indian/Christmas'
    }, {
        key: 'Asia/Brunei'
    }, {
        key: 'Asia/Choibalsan'
    }, {
        key: 'Asia/Hong_Kong'
    }, {
        key: 'Asia/Irkutsk'
    }, {
        key: 'Asia/Kuala_Lumpur'
    }, {
        key: 'Asia/Kuching'
    }, {
        key: 'Asia/Macau'
    }, {
        key: 'Asia/Makassar'
    }, {
        key: 'Asia/Manila'
    }, {
        key: 'Asia/Shanghai'
    }, {
        key: 'Asia/Singapore'
    }, {
        key: 'Asia/Taipei'
    }, {
        key: 'Asia/Ulaanbaatar'
    }, {
        key: 'Australia/Perth'
    }, {
        key: 'Etc/GMT-8'
    }, {
        key: 'Asia/Pyongyang'
    }, {
        key: 'Australia/Eucla'
    }, {
        key: 'Asia/Chita'
    }, {
        key: 'Asia/Dili'
    }, {
        key: 'Asia/Jayapura'
    }, {
        key: 'Asia/Khandyga'
    }, {
        key: 'Asia/Seoul'
    }, {
        key: 'Asia/Tokyo'
    }, {
        key: 'Asia/Yakutsk'
    }, {
        key: 'Etc/GMT-9'
    }, {
        key: 'Pacific/Palau'
    }, {
        key: 'Australia/Adelaide'
    }, {
        key: 'Australia/Broken_Hill'
    }, {
        key: 'Australia/Darwin'
    }, {
        key: 'Antarctica/DumontDUrville'
    }, {
        key: 'Asia/Ust-Nera'
    }, {
        key: 'Asia/Vladivostok'
    }, {
        key: 'Australia/Brisbane'
    }, {
        key: 'Australia/Currie'
    }, {
        key: 'Australia/Hobart'
    }, {
        key: 'Australia/Lindeman'
    }, {
        key: 'Australia/Melbourne'
    }, {
        key: 'Australia/Sydney'
    }, {
        key: 'Etc/GMT-10'
    }, {
        key: 'Pacific/Chuuk'
    }, {
        key: 'Pacific/Guam'
    }, {
        key: 'Pacific/Port_Moresby'
    }, {
        key: 'Australia/Lord_Howe'
    }, {
        key: 'Antarctica/Casey'
    }, {
        key: 'Antarctica/Macquarie'
    }, {
        key: 'Asia/Magadan'
    }, {
        key: 'Asia/Sakhalin'
    }, {
        key: 'Asia/Srednekolymsk'
    }, {
        key: 'Etc/GMT-11'
    }, {
        key: 'Pacific/Bougainville'
    }, {
        key: 'Pacific/Efate'
    }, {
        key: 'Pacific/Guadalcanal'
    }, {
        key: 'Pacific/Kosrae'
    }, {
        key: 'Pacific/Norfolk'
    }, {
        key: 'Pacific/Noumea'
    }, {
        key: 'Pacific/Pohnpei'
    }, {
        key: 'Asia/Anadyr'
    }, {
        key: 'Asia/Kamchatka'
    }, {
        key: 'Etc/GMT-12'
    }, {
        key: 'Pacific/Auckland'
    }, {
        key: 'Pacific/Fiji'
    }, {
        key: 'Pacific/Funafuti'
    }, {
        key: 'Pacific/Kwajalein'
    }, {
        key: 'Pacific/Majuro'
    }, {
        key: 'Pacific/Nauru'
    }, {
        key: 'Pacific/Tarawa'
    }, {
        key: 'Pacific/Wake'
    }, {
        key: 'Pacific/Wallis'
    }, {
        key: 'Pacific/Chatham'
    }, {
        key: 'Etc/GMT-13'
    }, {
        key: 'Pacific/Apia'
    }, {
        key: 'Pacific/Enderbury'
    }, {
        key: 'Pacific/Fakaofo'
    }, {
        key: 'Pacific/Tongatapu'
    }, {
        key: 'Etc/GMT-14'
    }, {
        key: 'Pacific/Kiritimati'
    }, {
        key: 'America/Scoresbysund'
    }, {
        key: 'Atlantic/Azores'
    }, {
        key: 'Atlantic/Cape_Verde'
    }, {
        key: 'Etc/GMT+1'
    }, {
        key: 'America/Noronha'
    }, {
        key: 'Atlantic/South_Georgia'
    }, {
        key: 'Etc/GMT+2'
    }, {
        key: 'America/Araguaina'
    }, {
        key: 'America/Argentina/Buenos_Aires'
    }, {
        key: 'America/Argentina/Catamarca'
    }, {
        key: 'America/Argentina/Cordoba'
    }, {
        key: 'America/Argentina/Jujuy'
    }, {
        key: 'America/Argentina/La_Rioja'
    }, {
        key: 'America/Argentina/Mendoza'
    }, {
        key: 'America/Argentina/Rio_Gallegos'
    }, {
        key: 'America/Argentina/Salta'
    }, {
        key: 'America/Argentina/San_Juan'
    }, {
        key: 'America/Argentina/San_Luis'
    }, {
        key: 'America/Argentina/Tucuman'
    }, {
        key: 'America/Argentina/Ushuaia'
    }, {
        key: 'America/Bahia'
    }, {
        key: 'America/Belem'
    }, {
        key: 'America/Cayenne'
    }, {
        key: 'America/Fortaleza'
    }, {
        key: 'America/Godthab'
    }, {
        key: 'America/Maceio'
    }, {
        key: 'America/Miquelon'
    }, {
        key: 'America/Montevideo'
    }, {
        key: 'America/Paramaribo'
    }, {
        key: 'America/Recife'
    }, {
        key: 'America/Santarem'
    }, {
        key: 'America/Sao_Paulo'
    }, {
        key: 'Antarctica/Rothera'
    }, {
        key: 'Atlantic/Stanley'
    }, {
        key: 'Etc/GMT+3'
    }, {
        key: 'America/St_Johns'
    }, {
        key: 'America/Asuncion'
    }, {
        key: 'America/Barbados'
    }, {
        key: 'America/Blanc-Sablon'
    }, {
        key: 'America/Boa_Vista'
    }, {
        key: 'America/Campo_Grande'
    }, {
        key: 'America/Caracas'
    }, {
        key: 'America/Cuiaba'
    }, {
        key: 'America/Curacao'
    }, {
        key: 'America/Glace_Bay'
    }, {
        key: 'America/Goose_Bay'
    }, {
        key: 'America/Grand_Turk'
    }, {
        key: 'America/Guyana'
    }, {
        key: 'America/Halifax'
    }, {
        key: 'America/La_Paz'
    }, {
        key: 'America/Manaus'
    }, {
        key: 'America/Martinique'
    }, {
        key: 'America/Moncton'
    }, {
        key: 'America/Port_of_Spain'
    }, {
        key: 'America/Porto_Velho'
    }, {
        key: 'America/Puerto_Rico'
    }, {
        key: 'America/Santiago'
    }, {
        key: 'America/Santo_Domingo'
    }, {
        key: 'America/Thule'
    }, {
        key: 'Antarctica/Palmer'
    }, {
        key: 'Atlantic/Bermuda'
    }, {
        key: 'Etc/GMT+4'
    }, {
        key: 'America/Atikokan'
    }, {
        key: 'America/Bogota'
    }, {
        key: 'America/Cancun'
    }, {
        key: 'America/Detroit'
    }, {
        key: 'America/Eirunepe'
    }, {
        key: 'America/Guayaquil'
    }, {
        key: 'America/Havana'
    }, {
        key: 'America/Indiana/Indianapolis'
    }, {
        key: 'America/Indiana/Marengo'
    }, {
        key: 'America/Indiana/Petersburg'
    }, {
        key: 'America/Indiana/Vevay'
    }, {
        key: 'America/Indiana/Vincennes'
    }, {
        key: 'America/Indiana/Winamac'
    }, {
        key: 'America/Iqaluit'
    }, {
        key: 'America/Jamaica'
    }, {
        key: 'America/Kentucky/Louisville'
    }, {
        key: 'America/Kentucky/Monticello'
    }, {
        key: 'America/Lima'
    }, {
        key: 'America/Nassau'
    }, {
        key: 'America/New_York'
    }, {
        key: 'America/Nipigon'
    }, {
        key: 'America/Panama'
    }, {
        key: 'America/Pangnirtung'
    }, {
        key: 'America/Port-au-Prince'
    }, {
        key: 'America/Rio_Branco'
    }, {
        key: 'America/Thunder_Bay'
    }, {
        key: 'America/Toronto'
    }, {
        key: 'EST'
    }, {
        key: 'EST5EDT'
    }, {
        key: 'Etc/GMT+5'
    }, {
        key: 'America/Bahia_Banderas'
    }, {
        key: 'America/Belize'
    }, {
        key: 'America/Chicago'
    }, {
        key: 'America/Costa_Rica'
    }, {
        key: 'America/El_Salvador'
    }, {
        key: 'America/Guatemala'
    }, {
        key: 'America/Indiana/Knox'
    }, {
        key: 'America/Indiana/Tell_City'
    }, {
        key: 'America/Managua'
    }, {
        key: 'America/Matamoros'
    }, {
        key: 'America/Menominee'
    }, {
        key: 'America/Merida'
    }, {
        key: 'America/Mexico_City'
    }, {
        key: 'America/Monterrey'
    }, {
        key: 'America/North_Dakota/Beulah'
    }, {
        key: 'America/North_Dakota/Center'
    }, {
        key: 'America/North_Dakota/New_Salem'
    }, {
        key: 'America/Rainy_River'
    }, {
        key: 'America/Rankin_Inlet'
    }, {
        key: 'America/Regina'
    }, {
        key: 'America/Resolute'
    }, {
        key: 'America/Swift_Current'
    }, {
        key: 'America/Tegucigalpa'
    }, {
        key: 'America/Winnipeg'
    }, {
        key: 'CST6CDT'
    }, {
        key: 'Etc/GMT+6'
    }, {
        key: 'Pacific/Easter'
    }, {
        key: 'Pacific/Galapagos'
    }, {
        key: 'America/Boise'
    }, {
        key: 'America/Cambridge_Bay'
    }, {
        key: 'America/Chihuahua'
    }, {
        key: 'America/Creston'
    }, {
        key: 'America/Dawson_Creek'
    }, {
        key: 'America/Denver'
    }, {
        key: 'America/Edmonton'
    }, {
        key: 'America/Fort_Nelson'
    }, {
        key: 'America/Hermosillo'
    }, {
        key: 'America/Inuvik'
    }, {
        key: 'America/Mazatlan'
    }, {
        key: 'America/Ojinaga'
    }, {
        key: 'America/Phoenix'
    }, {
        key: 'America/Yellowknife'
    }, {
        key: 'Etc/GMT+7'
    }, {
        key: 'MST'
    }, {
        key: 'MST7MDT'
    }, {
        key: 'America/Dawson'
    }, {
        key: 'America/Los_Angeles'
    }, {
        key: 'America/Tijuana'
    }, {
        key: 'America/Vancouver'
    }, {
        key: 'America/Whitehorse'
    }, {
        key: 'Etc/GMT+8'
    }, {
        key: 'Pacific/Pitcairn'
    }, {
        key: 'PST8PDT'
    }, {
        key: 'America/Anchorage'
    }, {
        key: 'America/Juneau'
    }, {
        key: 'America/Metlakatla'
    }, {
        key: 'America/Nome'
    }, {
        key: 'America/Sitka'
    }, {
        key: 'America/Yakutat'
    }, {
        key: 'Etc/GMT+9'
    }, {
        key: 'Pacific/Gambier'
    }, {
        key: 'Pacific/Marquesas'
    }, {
        key: 'America/Adak'
    }, {
        key: 'Etc/GMT+10'
    }, {
        key: 'HST'
    }, {
        key: 'Pacific/Honolulu'
    }, {
        key: 'Pacific/Rarotonga'
    }, {
        key: 'Pacific/Tahiti'
    }, {
        key: 'Etc/GMT+11'
    }, {
        key: 'Pacific/Niue'
    }, {
        key: 'Pacific/Pago_Pago'
    }, {
        key: 'Etc/GMT+12'
    }]
});
