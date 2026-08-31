"use client";

import Script from "next/script";

export function LiveChat() {
  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();

        Tawk_API.onLoad = function () {
          // Move Tawk launcher above the Customize Packages button
          Tawk_API.setAttributes({
            'position': 'bottom-right'
          }, function(error) {
            if (error) {
              console.log('Tawk position error:', error);
            }
          });
        };

        (function(){
          var s1 = document.createElement("script");
          var s0 = document.getElementsByTagName("script")[0];

          s1.async = true;
          s1.src = 'https://embed.tawk.to/6a92ffbdc3c46c34458759b3/1k173dvip';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin','*');

          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}