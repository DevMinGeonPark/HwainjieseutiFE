import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, ScrollView} from 'native-base';
import {Table, TableWrapper, Row, Rows} from 'react-native-reanimated-table';

interface TableBoradProps {
  tableData: string[][] | undefined;
}

interface TableState {
  tableHead: string[];
  tableData: string[][];
}

export default function TableBorad({tableData}: TableBoradProps) {
  const [table] = React.useState<TableState>({
    tableHead: ['일시', '내용', '만료', '지급', '사용'],
    tableData: tableData ?? [],
  });

  const widthArr = [200, 250, 100, 80, 60];

  return (
    <Box>
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={table.tableHead}
            widthArr={widthArr}
            style={styles.head}
            textStyle={[
              styles.text,
              {color: '#fff', fontFamily: 'SpoqaHanSans', fontWeight: '700'},
            ]}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={table.tableData as string[][]}
              widthArr={widthArr}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ScrollView>
    </Box>
  );
}
const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#333'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa'},
  row: {height: 28},
  text: {textAlign: 'center'},
});
