import React, { useRef, useMemo, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const CustomBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['30%', '100%'];
  const [busData, setBusData] = useState([]);


  return (
    <BottomSheet ref={sheetRef} index={0} snapPoints={snapPoints}>
      <BottomSheetView style={styles.contentContainer} children={undefined}>

      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
});

export default CustomBottomSheet;