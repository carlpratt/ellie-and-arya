import Image from "next/image";

export default function Home() {
  return (
    <div>
      <table>
        <tr>
          <Image
            src='/images/img_01.jpeg'
            height={607}
            width={455}
            quality={100}
          />
          <Image
            src='/images/img_02.jpeg'
            height={455}
            width={607}
            quality={100}
          />
          <Image
            src='/images/img_03.jpeg'
            height={607}
            width={455}
            quality={100}
          />
        </tr>
        <tr>
          <Image
            src='/images/img_04.jpeg'
            height={455}
            width={607}
            quality={100}
          />
          <Image
            src='/images/img_05.jpeg'
            height={455}
            width={607}
            quality={100}
          />
          <Image
            src='/images/img_06.jpeg'
            height={607}
            width={455}
            quality={100}
          />
        </tr>
      </table>

    </div>
  );
}