import React from 'react'
import faq from '../assets/faq.png'

function FAQ() {
  
  return (
    <div>
      <h1 className='faq'>Frequently asked questions</h1>
      <div>
          <img src={faq} alt="pills" className="faq-image"/>
       </div>

      <div className='faq'>
      <h6>How to order medicines online from Care Pharmacy?</h6>
      <p>Ordering medicines from Care Pharmacy online medical store is quick and hassle-free. If you wish to purchase over-the-counter medicines or FMCG products, all you need to do is click on the ‘Buy Medicines’ section on the app/website and type the name of the product you wish to buy in the search box. Once you select the product, you can click on the ‘Add to Cart’ button and proceed to make the payment. Once your order has been confirmed, we will start prepping your order for home delivery. </p>

      <h6>Is online medicine delivery safe?</h6>
      <p>Absolutely! All the medicines/products sold through our platform are inspected thoroughly for their authenticity and quality. Also, while delivering the medicines, our team follows strict safety protocols to ensure only the top-notch products get delivered to you.</p>

      <h6>How do I know if there is a delay in delivery?</h6>
      <p>If, for any reason, your order is delayed, our team will contact you either through SMS, call or email and inform you of the same.</p>

      <h6>Does Care Pharmacy provide home delivery of medicines?</h6>
      <p>Yes, Care Pharmacy provides the fastest home delivery of medicines.</p>

      <h6>Does Care Pharmacy provide same day delivery of online medicine order?</h6>
      <p>Yes, Care Pharmacy provides same day delivery of online medicine order.</p>

      <h6>Can Care Pharmacy provide express delivery?</h6>
      <p>Yes, depending on the city you reside in. In select cities, orders are delivered in as less as 1 hour. Please note that the express deliveries may be based on various other factors such as medicine availability, availability of the staff, etc.</p>

      </div>



    </div>
  )
}

export default FAQ