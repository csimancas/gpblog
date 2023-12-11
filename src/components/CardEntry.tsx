import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import {formatDate} from '../utils/commons';

type Props = {
  item: {
    _id: string;
    title: string;
    author: string;
    date: Date;
    content: string;
  };
  cardAction: () => void;
  isShowDetail: boolean;
  isList?: boolean;
};

const CardEntry = ({item, cardAction, isShowDetail, isList}: Props) => {
  return (
    <View>
      <Card style={styles.cardStyle}>
        <View style={styles.titleContainer}>
          <Text style={styles.regular}>
            Autor:
            <Text style={styles.bold}> {item.author}</Text>
          </Text>
          <Text style={styles.bold}>{formatDate(new Date(item.date))}</Text>
        </View>

        <Card.Title title={`Titulo: ${item.title}`} />
        {isList ? (
          <Card.Content>
            <Text>{`${item.content.substring(0, 60)} ...`}</Text>
          </Card.Content>
        ) : (
          <Card.Content>
            <Text>{item.content}</Text>
          </Card.Content>
        )}
        <Card.Actions>
          <Button mode="contained" onPress={cardAction}>
            {!isShowDetail ? 'Ver entrada' : 'Cerrar'}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
    marginBottom: 10,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  regular: {
    fontSize: 12,
    color: 'gray',
  },

  bold: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CardEntry;
