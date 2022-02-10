import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('€')} title='Economical' />
        <ResultsList
          results={filterResultsByPrice('€€')}
          title='A bit pricey'
        />
        <ResultsList results={filterResultsByPrice('€€€')} title='Fancy' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
