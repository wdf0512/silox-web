import { Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'

interface Props {
    logoSrc: {
        src: {
            '48': string;
            '96': string;
            '240': string;
        };
        content: string;
    };
    logoName: string
}

const LogoCard = ({ logoSrc, logoName }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-[450px]">
            <Image
                src={logoSrc.src['240']} // 默认图片
                sizes="(max-width: 640px) 48px, (max-width: 1024px) 96px, 144px"
                alt={logoName}
                width={100}
                height={100}
                className="object-contain"
            />
            {/* <img
                src={logoSrc.src['96']}
                srcSet={`
          ${logoSrc.src['48']} 48w,
          ${logoSrc.src['96']} 96w,
          ${logoSrc.src['240']} 240w
        `}
                sizes="(max-width: 640px) 48px, (max-width: 1024px) 96px, 144px"
                alt={logoName}
                width={100}
                height={100}
                className="object-contain"
            /> */}
            <Heading size={{ initial: '8', md: '5' }} className="break-words text-center max-w-[15ch]">
                {logoName}
            </Heading>
            <Text size={{ initial: '4', md: "3" }} className="text-center max-w-[20ch]">
                {logoSrc.content}
            </Text>
        </div>
    );
};

export default LogoCard