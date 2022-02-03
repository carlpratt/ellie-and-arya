import React, { useEffect } from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import Home from "./pics";

const setting = {
  width: '1750px', //TODO: Get window dimensions instead of hardcode
  height: ['450px', '450px', '450px'],
  layout: [3, 4],
  photos: [ // TODO: Pull from S3 bucket or IG api
    { source: 'https://ellie-and-arya.s3.amazonaws.com/00000IMG_00000_BURST20190202112259565_COVER.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20171129_004014.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20171129_004120.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20171129_071249.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20171210_140209.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180114_195903.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180228_231115_055.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180312_170832.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180316_153155.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180319_105412.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180521_222019.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20180602_204140.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20181108_094504.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20181126_090658.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20190215_182917.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20190502_234008.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20190511_134634.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20190906_154517.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20190918_201530.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20191016_122816.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20191020_113119.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20191025_190543.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20191117_221203.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20191125_190346.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20200319_115802_MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/IMG_20200427_181909_MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/MVIMG_20190611_215805_1.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/MVIMG_20191226_175658.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/MVIMG_20200104_214935.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/MVIMG_20200712_214525.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/MVIMG_20200715_171144.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20201017_000406989.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20201111_192900463.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20201218_060605330.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210203_180419266.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210215_152646116.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210215_152646116.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210215_152646116.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210312_215019992.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210323_151138426.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210329_030100147.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210404_231624168.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210419_045337422.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210506_022652784.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210515_175820044.MP.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210614_171529787.jpeg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20210622_145851451.jpeg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20211110_043430826.jpeg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20211219_181150653.jpeg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20220107_235333436.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/PXL_20220126_234751518.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1005255818.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1018473077.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1190679679.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1193079946.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1224821537.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1267376923.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1323142183.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1439446366.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1519294458.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1858518026.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1938954458.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-1966336181.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-500560397.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-550276618.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-732940824.jpg' },
    { source: 'https://ellie-and-arya.s3.amazonaws.com/Snapchat-746297932.jpg' }
  ],
  showNumOfRemainingPhotos: true
};

export default function Home1() {
  setting.photos = setting.photos.sort((a, b) => 0.5 - Math.random()); // Randomize photo array

  return (
    <ReactPhotoCollage {...setting} />
  );
}