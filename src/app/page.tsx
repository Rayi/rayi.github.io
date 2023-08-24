'use client'
import { IconCircleKey, IconMail, IconCreditCard, IconLockSquareRounded, IconTimelineEventText,IconApps, IconSettings } from '@tabler/icons-react';

import {Button} from '@nextui-org/button';
import { Menu } from '@headlessui/react'

export default function Home() {
  return (
    <div className='flex bg-zinc-900 absolute top-8 left-0 right-0 bottom-0 text-white overflow-y-auto page'>
      <div className='flex-initial w-4/12 p-3 border-r border-neutral-950'>
        <div className='flex flex-row pb-4 mb-2 border-b border-neutral-950'>
          <div className='mr-2 rounded-full bg-gradient-to-bl w-8 h-8 from-lime-500'></div>
          <div>
            <h2 className='text-white text-sm font-bold'>Rayi</h2>
            <p className='text-white text-xs text-slate-600'>Product Designer</p>
          </div>
        </div>
        <ul className='flex flex-col'>
          <li className='flex flex-col'>
            <a href="#" className='block transition-all ease-in-out duration-30 p-2 px-0 text-slate-500 text-xs font-semibold'>权限</a>
            <ul className='flex flex-col text-sm'>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-transparent transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-500  hover:text-zinc-200'><IconMail className="inline-block" size={16} /> 邮箱</a>
              </li>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-current transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-200 hover:text-slate-200'><IconLockSquareRounded className="inline-block" size={16} /> 密码和认证</a>
              </li>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-transparent transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-500  hover:text-zinc-200'><IconCreditCard className="inline-block" size={16} /> 付费计划</a>
              </li>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-transparent transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-500  hover:text-zinc-200'><IconCircleKey className="inline-block" size={16} /> SSH 和 GPT 密钥</a>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <a href="#" className='block transition-all ease-in-out duration-30 p-2 px-0 text-slate-500 text-xs font-semibold'>集成</a>
            <ul className='flex flex-col  text-sm'>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-transparent transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-500  hover:text-zinc-200'><IconApps className="inline-block" size={16} /> 应用</a>
              </li>
              <li className='py-1 border-y border-transparent'>
                <a href="#" className='block border-l border-transparent transition-all ease-in-out duration-300 p-1 pl-4 text-zinc-500 hover:text-slate-200'><IconTimelineEventText className="inline-block" size={16} /> 计划提醒</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='flex-auto p-4 px-6 overflow-y-auto'>
        <div className="mb-10">
          <h1 className="py-3 mb-4 text-white text-xl border-b border-b-zinc-800">修改密码</h1>
          <div>
            <div className="flex flex-col gap-y-1 mb-2">
              <label className="py-1 text-white text-sm">旧密码</label>
              <input className="px-2 py-1 border border-zinc-950 rounded bg-zinc-800" type="text" />
            </div>
            <div className="flex flex-col gap-y-1 mb-2">
              <label className="py-1 text-white text-sm">新密码</label>
              <input className="px-2 py-1 border border-zinc-950 rounded bg-zinc-800" type="text" />
            </div>
            <div className="flex flex-col gap-y-1 mb-2">
              <label className="py-1 text-white text-sm">确认新密码</label>
              <input className="px-2 py-1 border border-zinc-950 rounded bg-zinc-800" type="text" />
            </div>
            <p className="text-slate-400 text-xs">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>
            <div className="flex flex-row gap-y-1 my-2">
              <button className="inline-block transition ease-in duration-200 text-zinc-300 text-sm font-medium px-6 py-2 border border-zinc-950 rounded bg-blue-800 hover:bg-blue-700 shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-950">更新密码</button>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h1 className="py-3 mb-4 text-white text-xl border-b border-b-zinc-800">邮箱</h1>
          <div className='mb-4 border rounded border-zinc-700 divide-y divide-solid divide-zinc-700'>
            <div className=''>
              <div className='p-4'>
                <h3 className='text-white font-bold text-base'>trststsd@fxsdsssd.com</h3>
                <ul className='mt-2 list-disc list-inside'>
                  <li className='text-slate-500 text-xs'>Visible in emails <IconCircleKey className="inline-block" size={16} /></li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='p-4'>
                <h3 className='text-white font-bold text-base'>trststsd@fxsdsssd.com</h3>
                <ul className='mt-2 list-disc list-inside'>
                  <li className='text-slate-500 text-xs'>Visible in emails <IconCircleKey className="inline-block" size={16} /></li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='p-4'>
                <h3 className='text-white font-bold text-base'>trststsd@fxsdsssd.com</h3>
                <ul className='mt-2 list-disc list-inside'>
                  <li className='text-slate-500 text-xs'>Visible in emails <IconCircleKey className="inline-block" size={16} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div>

            <div className="flex flex-col gap-y-1 mb-2 pb-4 border-b border-b-zinc-800">
              <label className="py-1 text-white text-sm font-bold">添加新的邮箱</label>
              <div>
                <input placeholder='输入邮箱' className="w-60 h-10 px-2 py-2 mr-2 text-sm border border-zinc-950 rounded bg-zinc-800" type="text" />
                <button className="inline-block transition ease-in duration-200 text-zinc-300 text-sm font-medium px-6 py-2 border border-zinc-950 rounded bg-zinc-700 hover:bg-zinc-600 shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-950">添加</button>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mb-2 pb-4">
              <label className="py-1 text-white text-sm font-bold">添加新的邮箱</label>
              <div>
                <p className="text-slate-300 text-sm mb-2">Please choose the email you mostly use.</p>
                <select placeholder='输入邮箱' className="w-60 h-10 px-2 py-2 mr-2 text-xs border border-zinc-950 rounded bg-zinc-800">
                    <option value="1">xxxxx@gsdsd.com</option>
                    <option value="2">选项2</option>
                    <option value="3">选项3</option>
                  </select>
                <button className="inline-block transition ease-in duration-200 text-zinc-300 text-sm font-medium px-6 py-2 border border-zinc-950 rounded bg-blue-800 hover:bg-blue-700 shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-950">添加</button>
              </div>
            </div>

            <div className="flex flex-row gap-y-1 my-2">
              <button className="inline-block transition ease-in duration-200 text-zinc-300 text-sm font-medium px-6 py-2 border border-zinc-950 rounded bg-blue-800 hover:bg-blue-700 shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-950">更新密码</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
