import { Flex } from '@radix-ui/themes';
import { ReactElement } from 'react';

interface Props {
    title: string;
    description: string;
    icons: ReactElement
}

const SkillDetailCard = ({ title, description, icons }: Props) => {
    return (
        <Flex direction="column" className="p-6  rounded-lg shadow-2xl hover:shadow-xl hover:scale-105 duration-300 transition-all">
            <Flex direction="column" gap="4">
                <div className="flex justify-center">{icons}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">{title}</h3>
                <p className="text-gray-600 text-center">{description}</p>
            </Flex>
        </Flex>
    );
};

export default SkillDetailCard