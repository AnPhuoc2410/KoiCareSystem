/* eslint-disable react/no-unescaped-entities */
import pond from '../../assets/KoiPond.png'
import food from '../../assets/FoodCalculator.png'
import fish from '../../assets/KoiFish.png'
import statistics from '../../assets/Statistic.png'
import salt from '../../assets/SaltCalculator.png'
import water from '../../assets/WaterParameter.png'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utils/animation'

function Feature() {
  return (
    <div>
      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={FadeRight(1)}
              className='text-3xl text-center font-bold mb-12'
            >
              Manage Your Pond with Ease{' '}
            </motion.div>
            <motion.div initial='hidden' animate='visible' variants={FadeRight(1.2)} className='text-justify text-xl'>
              The Koi Care System Web allows you to effortlessly manage the health and environment of your ponds. Keep
              track of vital pond details, including water quality, temperature, and fish population, to ensure a
              thriving habitat for your koi. With features designed to streamline pond management, you can monitor water
              conditions, manage koi assignments, and track pond history. Whether you have one pond or multiple, our
              system provides a comprehensive overview, making pond maintenance simpler and more effective.
            </motion.div>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={pond} alt='img' />
        </div>
      </div>
      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <h className='text-3xl text-center font-bold mb-12'>Manage and track your koi!</h>
            <p className='text-justify text-xl'>
              Feeding your koi the right amount is key to their health and growth. With the Koi Care System Web, you can
              calculate the ideal feeding quantities based on each koi’s size, age, and activity level. Track daily
              feeding patterns and get recommendations tailored to your koi's needs, ensuring optimal nutrition without
              overfeeding or underfeeding. By using this feature, you can promote healthy growth and maintain the
              perfect balance in your koi pond ecosystem.
            </p>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={food} alt='img' />
        </div>
      </div>

      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <h className='text-3xl text-center font-bold mb-12'>Manage and Track Your Koi!</h>
            <p className='text-justify text-xl'>
              Our Koi Care System Web makes it easy to manage and track all aspects of your koi collection. With
              intuitive features designed to help you monitor koi growth, health, and pond conditions, you'll have
              everything you need at your fingertips. Track your koi’s length, weight, age, and more while accessing
              growth history charts and detailed care records. Whether you’re a hobbyist or a professional breeder, our
              platform ensures you can provide the best care for your koi with ease and precision.
            </p>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={fish} alt='img' />
        </div>
      </div>

      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <h className='text-3xl text-center font-bold mb-12'>Monitor Statistics for Informed Koi Care!</h>
            <p className='text-justify text-xl'>
              The Koi Care System Web provides detailed statistics to help you make informed decisions about your koi
              and pond management. Track critical data such as growth trends, feeding habits, water parameters, and
              health records over time. Visualize koi growth charts, compare performance metrics across ponds, and
              analyze patterns in water quality to ensure a healthy environment. With these insights, you can optimize
              care strategies, address potential issues early, and make data-driven decisions for the long-term
              well-being of your koi.{' '}
            </p>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={statistics} alt='img' />
        </div>
      </div>

      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <h className='text-3xl text-center font-bold mb-12'>Determine the Right Amount of Salt for Your Pond!</h>
            <p className='text-justify text-xl'>
              Salt plays an important role in maintaining koi health, aiding in stress reduction, disease prevention,
              and osmoregulation. The Koi Care System Web helps you calculate the ideal amount of salt to add to your
              pond based on water volume and koi health needs. Whether you're treating parasites, boosting immune
              function, or maintaining general water balance, our system provides accurate recommendations to ensure
              your koi stay healthy without over-salting the water. Keep your pond’s salt levels just right for optimal
              fish care!
            </p>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={salt} alt='img' />
        </div>
      </div>

      <div className='flex h-[90vh]'>
        <div className='w-2/5 pl-16 flex flex-col items-center justify-center h-full py-10'>
          <div className='flex flex-col justify-center ml-10 py-10 px-5 font-medium'>
            <h className='text-3xl text-center font-bold mb-12'>Manager Water for Pond</h>
            <p className='text-justify text-xl'>
              Maintaining the right water quality is essential for the health of your koi, and the Koi Care System Web
              helps you stay on top of it effortlessly. Track and monitor key water parameters such as pH, temperature,
              ammonia, nitrite, and oxygen levels to ensure a balanced and safe environment for your fish. With
              real-time data and alerts, you’ll always know when it’s time to take action, helping you keep your pond's
              water in perfect condition for your koi to thrive.
            </p>
          </div>
        </div>
        <div className='w-3/5 flex flex-col items-center justify-center min-h-full '>
          <img className='' src={water} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Feature
