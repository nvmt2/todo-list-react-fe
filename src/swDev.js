export function swDev() {
  if ('serviceWorker' in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker
      .register(swUrl)
      .then((res) => {
        console.log('swDev response: ', res);
        return res.pushManager.getSubscription().then((subscription) => {
          return res.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey(),
          });
        });
      })
      .catch((err) => console.log('swDev err: ', err));
  } else {
    console.log('Service worker is not working: ');
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function determineAppServerKey() {
  let vapidPublicKey =
    'BHc8SVNH6E1oXj9l-AHKCVB3W_sfqCUUsIQpFmhHrw38M5x3H_VRcH1lg_ksDjv_e_lER_hm0D_GL7NM3GWjPpA';
  return urlBase64ToUint8Array(vapidPublicKey);
}

// "subject": "mailto: <minhtoi.nguyen.vtp@gmail.com>",
// "publicKey": "BHc8SVNH6E1oXj9l-AHKCVB3W_sfqCUUsIQpFmhHrw38M5x3H_VRcH1lg_ksDjv_e_lER_hm0D_GL7NM3GWjPpA",
// "privateKey": "EGWq0kAQlARbxrtbXN9g7SnrTbOY6Pdm9PFHNQrE53g"
