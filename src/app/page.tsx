'use client'
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import { IconStarFilled, IconStarHalfFilled, IconStar, IconDog, IconCat,IconPaw, IconLink } from '@tabler/icons-react';

export default function App() {
  const favs = [
    {
      name: 'MacBookPro M2 14',
      type: '电脑设备',
      thumb: 'https://timit.quanzi.io/macbook_pro.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://www.apple.com/macbook-pro-14-and-16/'
    },
    {
      name: 'iPad Pro',
      type: '数码',
      thumb: 'https://timit.quanzi.io/ipad_pro.png',
      recommendationRate: [1,1,1,1,0.5],
      url: 'https://www.apple.com/ipad-pro/'
    },
    {
      name: '罗技 Master 3S',
      type: '电脑设备',
      thumb: 'https://timit.quanzi.io/master3s.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://detail.tmall.com/item.htm?abbucket=17&id=674434245019&ns=1&skuId=5071670633780'
    },
    {
      name: 'LG 4K 显示器',
      type: '电脑设备',
      thumb: 'https://timit.quanzi.io/lg_screen.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: '罗技 Keyboard MX',
      type: '电脑设备',
      thumb: 'https://timit.quanzi.io/mx_keyboard.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://detail.tmall.com/item.htm?id=605535942523&scene=taobao_shop&sku_properties=1627207:12604774045;211004089:10010'
    },
    {
      name: 'ORICO 磁盘阵列',
      type: '存储',
      thumb: 'https://timit.quanzi.io/raid.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: 'Apple Watch',
      type: '数码',
      thumb: 'https://timit.quanzi.io/apple_watch.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: '硬糖小电拼',
      type: '充电',
      thumb: 'https://timit.quanzi.io/ytxdp.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://detail.tmall.com/item.htm?abbucket=17&id=726104922689&ns=1'
    },
    {
      name: 'iPhone',
      type: '数码设备',
      thumb: 'https://timit.quanzi.io/iphone.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: '垃圾桶/绝版',
      type: '生活',
      thumb: 'https://timit.quanzi.io/garbage_can.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: '纸巾盒/绝版',
      type: '生活',
      thumb: 'https://timit.quanzi.io/zhijinhe.png',
      recommendationRate: [1,1,1,1,1]
    },
    {
      name: 'CleanMyMac X',
      type: '软件',
      thumb: 'https://timit.quanzi.io/cleanmymacx.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://macpaw.com/cleanmymac'
    },
    {
      name: '1Password',
      type: '软件',
      thumb: 'https://timit.quanzi.io/1password.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://1password.com/'
    },
    {
      name: 'Notion',
      type: '软件',
      thumb: 'https://timit.quanzi.io/notion.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://www.notion.so/'
    },
    {
      name: 'Sketch',
      type: '工作软件',
      thumb: 'https://timit.quanzi.io/sketch.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://www.sketch.com/'
    },
    {
      name: 'VS Code',
      type: '工作软件',
      thumb: 'https://timit.quanzi.io/vscode.png',
      recommendationRate: [1,1,1,1,1],
      url: 'https://code.visualstudio.com/'
    },
  ]
  return (
    <div>
      <h1 className="max-w-[900px] mx-auto text-2xl p-6">一些好物</h1>
      <div className="max-w-[900px] mx-auto gap-4 grid grid-cols-12 grid-rows-2 p-6 pb-10">
          { favs.map(item => {
            return (
              <Card className="col-span-12 sm:col-span-3">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="my-2 text-tiny uppercase flex text-black/60 hidden">
                    { item.recommendationRate.map(recommendValue => {
                      return recommendValue === 1 ? <IconStarFilled size={12} /> : (recommendValue === 0.5 ? <IconStarHalfFilled size={12} /> : <IconStar size={12} />)
                    })}
                  </p>
                  <small className="my-2 text-xs text-default-500 antialiased">{item.type}</small>
                  <h4 className="text-sm">
                    {item.url ? (
                      <Link underline="hover" size="sm" href={item.url} isExternal color="foreground">
                        {item.name}
                      </Link>
                    ) : (
                      item.name
                    )}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  {item.url ? (
                    <Link href={item.url} isExternal>
                      <Image
                      alt={item.name}
                      className="object-cover rounded-xl"
                      src={item.thumb}
                      width={260}
                    />
                    </Link>
                  ) : (
                    <Image
                      alt={item.name}
                      className="object-cover rounded-xl"
                      src={item.thumb}
                      width={260}
                    />
                  )}
                </CardBody>
              </Card>
            )
          })}
        </div>
    </div>
  );
}