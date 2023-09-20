import {Button, HStack, ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FontText} from '@src/Atomic/FontText';

interface Props {
  CommentsCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({
  CommentsCount,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(CommentsCount / 10);
  const buttonsPerPage = 5;
  const defaultButtonPage = Math.ceil(currentPage / buttonsPerPage);
  const [currentButtonPage, setCurrentButtonPage] = useState(defaultButtonPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevButtonPage = () => {
    setCurrentButtonPage(currentButtonPage - 1);
  };

  const handleNextButtonPage = () => {
    setCurrentButtonPage(currentButtonPage + 1);
  };

  const startIndex = (currentButtonPage - 1) * buttonsPerPage;
  const endIndex = startIndex + buttonsPerPage;

  return (
    <HStack space={7}>
      <Pressable
        onPress={handlePrevButtonPage}
        disabled={currentButtonPage === 1}>
        <FontText fontSize={17}>{'<'}</FontText>
      </Pressable>
      {pages.slice(startIndex, endIndex).map(page => (
        <Pressable key={page} onPress={() => handleClick(page)}>
          <FontText
            fontSize={17}
            fontWeight={page === currentPage ? 'bold' : undefined}>
            {page}
          </FontText>
        </Pressable>
      ))}
      <Pressable
        onPress={handleNextButtonPage}
        disabled={currentButtonPage === Math.ceil(totalPages / buttonsPerPage)}>
        <FontText fontSize={17}>{'>'}</FontText>
      </Pressable>
    </HStack>
  );
};

export default Pagination;
