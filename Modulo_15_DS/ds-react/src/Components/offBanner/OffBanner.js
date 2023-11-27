import './styles.css'
import React from 'react'

export default function OffBanner() {
  return (
    <div className='offBanner flex'>
        <div className='miniBanner'>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2022-12-02/8982_318X54_deal1_generica_221202.jpg' alt='2 por R$ 169,90' />
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-07-27/6193_318X54_deal2_generica_230727.jpg' alt='2 por R$ 199,90'/>
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-17/2500_318x54_deal3_generica_230817.png' alt='Hering'/>
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-04-13/9415_318X54_deal4_generica_230413.jpg' alt='20% em 2 itens'/>
            </a>
        </div>
        <div className='cardBanners flex'>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-09-21/2327_420x420_triplo1_generica_230921.jpg' alt='Scarpins'/></a>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-28/7025_420x420_triplo2_generica_230828.png' alt='Desconto Progressivo'/></a>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-09-25/9465_420x420_triplo3_generica_230925.jpg' alt='Farm'/></a>
        </div>
    </div>
  )
}