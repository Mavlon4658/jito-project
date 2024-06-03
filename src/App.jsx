import { useState } from 'react'
import Container from './components/Container'
import IMG from './assets'
import ButtonGray from './components/ButtonGray'
import ButtonGreen from './components/ButtonGreen'
import ButtonRed from './components/ButtonRed'
import ButtonBlue from './components/ButtonBlue'
import classNames from "classnames"

function App() {
  const [table, setTable] = useState([
    {className: 'dark', time: 'Time', currency: 'Usd', token: 'Token', sol: 'Sol', price: 'Price', txn: 'txn'},
    {className: 'green', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'green', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'red', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'green', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'red', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'red', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'green', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'green', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
    {className: 'dark', time: 'IFD', currency: '', token: '', sol: '', price: '', txn: ''},
    {className: 'red', time: '09:42', currency: '9324.12', token: '64649647.52', sol: '7.0438', price: '$0.0000156950', txn: '#'},
  ])

  function makeClass(tableItem, ID) {
    return classNames(
      'flex items-center gap-1 py-[6px] px-[30px] text-base font-semibold',
      {'uppercase text-lg font-[500] pt-[10px]': tableItem.className == 'dark'},
      {'border-l-[3px] border-solid border-l-dark-blue-700': tableItem.className == 'dark' && ID != 0},
      {'border-l-[3px] border-solid bg-green-25 border-l-green-300': tableItem.className == 'green'},
      {'border-l-[3px] border-solid bg-danger-30 border-l-danger-300': tableItem.className == 'red'}
    )
  }

  return (
    <div className='font-jost pb-[43px]'>
      <Container className="pt-[25px] pb-[6px] flex items-stretch gap-[10px]">
        <div className='bg-dark-blue-100 px-5 py-[18px] rounded-[2px] w-full'>
          <div className='flex items-center justify-between mb-[10px]'>
            <div className='flex items-center gap-4'>
              <span className='text-base font-semibold'>JITO</span>
              <button className='relative bg-light-blue-33 border border-solid border-light-blue-100 w-[42px] h-[22px] rounded-full'>
                <span className='absolute right-1 w-3 h-3 top-1 bg-light-blue-100 rounded-full'></span>
              </button>
            </div>
            <div className='flex items-center bg-dark-blue-200'>
              <p className='px-2'>8aTTBK1JsdcuG35TCAjXfLqJptssuqqGvVGso</p>
              <span className='w-10 h-10 flex items-center justify-center shrink-0 rounded-[0_4px_4px_0] bg-light-blue-25'>
                <img src={IMG.avatar} alt="" />
              </span>
            </div>
          </div>
          <div className='flex justify-between border border-solid border-light-blue-55 rounded-[2px] py-6 px-[30px]'>
            <div>
              <div className='flex items-center gap-5 mb-5'>
                <img src={IMG.user} className='w-[52px] h-[52px] rounded-full shrink-0 object-cover' alt="" />
                <h2 className='text-xl font-semibold'>Optimus [OPTIMUS]</h2>
              </div>
              <div className='flex items-center mb-2'>
                <h3 className='w-[55px] text-[17px] font-semibold font-raleway'>PAIR</h3>
                <p className='bg-dark-blue-200 py-[6px] pe-[10px] ps-4 flex items-center gap-6'>
                  <span className='text-base font-medium'>B6mhTva...2QGpU2</span>
                  <button>
                    <img src={IMG.copy} alt="" />
                  </button>
                </p>
              </div>
              <div className='flex items-center'>
                <h3 className='w-[55px] text-[17px] font-semibold font-raleway'>MINT</h3>
                <p className='bg-dark-blue-200 py-[6px] pe-[10px] ps-4 flex items-center gap-6'>
                  <span className='text-base font-medium'>Fh6RL1s...GvAqx46</span>
                  <button>
                    <img src={IMG.copy} alt="" />
                  </button>
                </p>
              </div>
            </div>
            <div className='pt-3 flex flex-col items-center w-[180px]'>
              <div className='flex items-center gap-[10px] mb-6 h-[29px]'>
                <img src={IMG.price} alt="" />
                <span className='text-xl font-medium'>153.98 $</span>
              </div>
              <p className='w-full mb-[10px] rounded-[2px] h-8 border border-solid border-light-blue-100 flex items-center justify-center gap-[10px] text-xs font-semibold'>
                <span>0.06 SOL</span>
                <span className='h-4 w-[1px] bg-light-blue-100'></span>
                <span>0.69 WSOL</span>
              </p>
              <button className='w-full h-[46px] rounded-[2px] bg-dark-blue-300 hover:bg-light-blue-300 active:bg-dark-blue-600 border border-solid border-light-blue-100 gap-2 flex items-center justify-center '>
                <span className='uppercase text-lg font-semibold'>Swap</span>
                <img src={IMG.reverse} alt="" />
              </button>
            </div>
          </div>
        </div>
        <ul className='bg-dark-blue-100 w-[258px] rounded-[2px] shrink-0'>
          <li className='py-[16px] px-[28px] flex flex-col text-lg border-b-[#303848] border-b border-solid'>
            Liquidity
            <span className='text-2xl mt-[2px] font-bold'>$27.6K</span>
          </li>
          <li className='py-[16px] px-[28px] flex flex-col text-lg border-b-[#303848] border-b border-solid'>
            SOL pool
            <span className='text-2xl mt-[2px] font-bold'>$13.8K</span>
          </li>
          <li className='py-[16px] px-[28px] flex flex-col text-lg'>
            M. Cap
            <span className='text-2xl mt-[2px] font-bold'>$159.0K</span>
          </li>
        </ul>
      </Container>
      <Container className="flex items-start justify-between gap-[10px] mb-[10px]">
        <div className='w-full flex items-start'>
          <div className='w-6/12'>
            <h3 className='text-center text-base h-6 mb-[2px] font-medium'>FEE, SOL</h3>
            <ul className='flex items-center justify-center h-[30px] text-base font-semibold bg-dark-blue-100'>
              <li className='w-6/12 text-center'>0.005</li>
              <li className='w-6/12 text-center'>0.005</li>
            </ul>
          </div>
          <div className='w-6/12'>
            <h3 className='text-center text-base h-6 mb-[2px] font-medium'>UNITS, K</h3>
            <ul className='flex items-center justify-center h-[30px] text-base font-semibold bg-dark-blue-100'>
              <li className='w-6/12 text-center'>100.51</li>
              <li className='w-6/12 text-center'>100.51</li>
            </ul>
          </div>
        </div>
        <div className='w-[258px] shrink-0'>
          <h3 className='text-center text-base h-6 mb-[2px] font-medium'>SLIPPAGE, %</h3>
          <ul className='flex items-center justify-center h-[30px] text-base font-semibold bg-dark-blue-100'>
            <li className='w-6/12 text-center'>12</li>
            <li className='w-6/12 text-center'>12</li>
          </ul>
        </div>
      </Container>
      <Container className="flex items-stretch justify-between gap-[10px] mb-[10px]">
        <div>
          <img src={IMG.chart} alt="" />
        </div>
        <div className='w-[258px] shrink-0 bg-dark-blue-100 pb-[10px] pt-[33px] px-[12.5px]'>
          <div className='flex justify-center mb-5'>
            <img src={IMG.priceBig} alt="" className='w-[107px]' />
          </div>
          <p className='h-[50px] mb-2 text-xl font-semibold gap-2 flex items-center justify-center'>
            <span className='text-light-blue-100'>$</span> 0.0000159223955
          </p>
          <div className='flex items-center gap-2'>
            <ButtonGray className="w-[calc((50%_-_4px)_/_2_-_4px)] shrink-0">+</ButtonGray>
            <ButtonGray className="w-[calc((50%_-_4px)_/_2_-_4px)] shrink-0">-</ButtonGray>
            <ButtonGray className="w-full">S</ButtonGray>
          </div>
          <div className='my-2 flex items-start gap-2'>
            <ButtonGreen className="w-full">Buy 1.250</ButtonGreen>
            <ButtonGreen className="w-full">Buy 2.500</ButtonGreen>
          </div>
          <div className='mb-2 flex gap-2'>
            <ButtonRed className="w-full">25</ButtonRed>
            <ButtonRed className="w-full">50</ButtonRed>
            <ButtonRed className="w-full">75</ButtonRed>
            <ButtonRed className="w-full">100</ButtonRed>
          </div>
          <ButtonBlue className="w-full">Buy</ButtonBlue>
        </div>
      </Container>
      <Container className="bg-dark-blue-100 rounded-[2px] flex flex-col gap-1 overflow-hidden">
        {table.map((t, idx) => (
          <div
            key={idx}
            className={makeClass(t, idx)}
          >
            <span className='w-[118px]'>{t.time}</span>
            <span className='w-[128px]'>{t.currency}</span>
            <span className='w-[164px]'>{t.token}</span>
            <span className='w-[126px]'>{t.sol}</span>
            <span className='w-[197px]'>{t.price}</span>
            <span>{t.txn}</span>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default App
