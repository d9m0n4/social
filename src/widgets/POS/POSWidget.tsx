'use client';
import { Suspense, useEffect, useState } from 'react';

//TODO: перенести стили из globals.css

export default function PosWidget() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const script = document.createElement('script');
    script.src = '/widget.js';
    document.body.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.src = '/form.js';
    document.body.appendChild(inlineScript);
    setLoading(false);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      <div id="js-show-iframe-wrapper">
        <div className="pos-banner-fluid bf-5">
          <div className="bf-5__decor">
            <div className="bf-5__logo-wrap">
              <img
                className="bf-5__logo"
                src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg"
                alt="Госуслуги"
              />
              <div className="bf-5__slogan">Решаем вместе</div>
            </div>
          </div>
          <div className="bf-5__content">
            <div className="bf-5__text">
              Не получили выплату или льготную путевку? Есть предложения по улучшению работы органов
              социальной защиты?
            </div>
            <div className="bf-5__bottom-wrap">
              <div className="bf-5__btn-wrap">
                <button className="pos-banner-btn_2" type="button">
                  Написать о проблеме
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
