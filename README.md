# nord-security-web-analytics-task
Meta Pixel GTM Implementation - Nord Security Technical Part D

Overview:

This project demonstrates a Meta Pixel Implementation using Google Tag Manager.

What was built:
1. A simulated plans pricing and checkout flow including:
- 5 pricing plans with monthly, yearly and 2-year billing options;
- Locale switcher affecting currency USD/EUR;
- Full checkout flow with purchase confirmation page;
- Meta Pixel base code implemented using GTM;
- AddToCart event firing on plan selection;
- Conversion event firing on successful checkout completion;
- Unique order ID generation preventing duplicate conversions;

GTM Container:
GTM-TTD595MB

Meta Pixel ID:
883548988060576

Events Implemented:
Event, Trigger, DataLayer values;

| AddToCart | User selects a plan | plan_name, plan_price, currency, billing_period, locale |
| Conversion (Purchase) | Confirmation page loads | plan_name, plan_price, currency, billing_period, order_id, user_email, locale 
| PageView | All pages | automatic |

Both events verified using:
- Meta Pixel Helper Chrome extension;
- Meta Events Manager Test Events;
