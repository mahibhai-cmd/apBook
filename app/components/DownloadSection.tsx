import Image from 'next/image';

export default function DownloadSection() {
  return (
    <section className="download-apk-sec">
      <div className="container">
        <div className="download-app">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
              <div className="download-title">
                <h3>Download our app</h3>
                <a href="/apbook.apk" download>
                  <button type="button" className="down-ld-app">DOWNLOAD APK</button>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
              <div className="android-img" style={{ textAlign: 'center' }}>
                <figure style={{ margin: 0 }}>
                  <Image
                    src="/lp-images/bb7android.324f0208.png"
                    alt="Download APBook Android App"
                    width={320}
                    height={420}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
