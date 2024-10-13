const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Sunucu kaynaklı bazı sorunlar yaşanabilir. En kısa zamanda düzelteceğiz.', 'danger')
  })
}
  //Çerezler popup'ı
  window.onload = function () {
    const cookiePopup = document.getElementById('cookiePopup');
    const warningPopup = document.getElementById('warningPopup');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');
    const confirmDecline = document.getElementById('confirmDecline');
    const cancelDecline = document.getElementById('cancelDecline');

    // Eğer kullanıcı daha önce kabul ettiyse veya reddettiyse popup gösterilmesin
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookiePopup.classList.add('show');
        }, 500); // Biraz gecikmeli olarak göster
    }

    acceptCookies.addEventListener('click', () => {
        cookiePopup.classList.add('hide'); // Gizlenme animasyonu
        setTimeout(() => {
            cookiePopup.classList.remove('show', 'hide');
        }, 400); // Animasyonun tamamlanması için bekle
        localStorage.setItem('cookiesAccepted', 'true'); // Kabul edildiyse kaydet
    });

    declineCookies.addEventListener('click', () => {
        cookiePopup.classList.remove('show');
        warningPopup.classList.add('show'); // Uyarı popup'ını göster
    });

    // Uyarı popup'ında Onayla'ya tıklanınca
    confirmDecline.addEventListener('click', () => {
        warningPopup.classList.add('hide'); // Uyarı popup'ını gizle
        setTimeout(() => {
            warningPopup.classList.remove('show', 'hide');
        }, 400); // Gizlenme animasyonu süresi
        localStorage.setItem('cookiesAccepted', 'true'); // Reddetme de kaydedilsin
    });

    // Uyarı popup'ında İptal'e tıklanınca
    cancelDecline.addEventListener('click', () => {
        warningPopup.classList.add('hide'); // Uyarı popup'ını gizle
        setTimeout(() => {
            warningPopup.classList.remove('show', 'hide');
            cookiePopup.classList.add('show'); // Ana cookies popup'ını geri getir
        }, 400); // Gizlenme animasyonu süresi
    });
};
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
document.addEventListener('DOMContentLoaded', (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById('darkModeSwitch');

  // Set the default theme to dark if no setting is found in local storage
  const currentTheme = localStorage.getItem('bsTheme') || 'dark';
  htmlElement.setAttribute('data-bs-theme', currentTheme);
  switchElement.checked = currentTheme === 'dark';

  switchElement.addEventListener('change', function () {
      if (this.checked) {
          htmlElement.setAttribute('data-bs-theme', 'dark');
          localStorage.setItem('bsTheme', 'dark');
      } else {
          htmlElement.setAttribute('data-bs-theme', 'light');
          localStorage.setItem('bsTheme', 'light');
      }
  });
});
const darkModeToggle = document.getElementById('darkModeToggle');
const darkIcon = document.getElementById('darkIcon');
const lightIcon = document.getElementById('lightIcon');

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode'); // Apply dark mode styling
    darkIcon.style.display = 'none'; // Hide dark icon
    lightIcon.style.display = 'inline'; // Show light icon
}
