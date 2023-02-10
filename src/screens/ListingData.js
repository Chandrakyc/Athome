/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {Component} from 'react';
export default class ListingData extends Component {
  constructor() {
    super();
    this.state = {
      arrData: [
        {
          _id: '63d1b0d1d35076e9ad331abb',

          index: 0,

          guid: 'a055a1ca-63fe-44c3-af33-a97ef8b2e2bd',

          isActive: true,

          balance: '$2,096.91',

          age: 45,

          eyeColor: 'brown',

          name: 'Webster Gibbs',

          email: 'webstergibbs@gonkle.com',

          about:
            'Reprehenderit labore nostrud ea nulla in laborum non amet tempor. Esse dolore non Lorem sint. Et voluptate ullamco ea enim in quis sit voluptate. Dolore consequat voluptate labore ipsum fugiat Lorem sint officia. Commodo enim consectetur veniam veniam dolor ullamco commodo magna ullamco. Amet labore officia nulla enim non dolore veniam. Ipsum ea quis ex consequat aliquip ullamco consequat.\r\n',

          registered: '2014-08-07T06:51:45 +06:00',

          favoriteFruit: 'strawberry',
        },
        {
          _id: '63d1b0d192eabee868cbadac',

          index: 7,

          guid: 'fa08cfd1-ea81-4fe4-a7b3-242c99c170f0',

          isActive: false,

          balance: '$963.15',

          age: 49,

          eyeColor: 'blue',

          name: 'Slater Chang',

          email: 'slaterchang@gonkle.com',

          about:
            'Pariatur ex ex exercitation dolore. Exercitation sit sint excepteur non ipsum consectetur fugiat cupidatat ea laboris proident sint ipsum sint. Incididunt proident duis minim qui consectetur eu in officia laboris fugiat consequat enim aute. Laboris voluptate qui aliqua non veniam duis esse amet anim sint ullamco culpa cupidatat. Irure quis ea dolor minim laborum occaecat esse veniam velit et veniam. Dolore veniam dolor dolore cupidatat.\r\n',

          registered: '2022-10-21T07:24:31 +06:00',

          favoriteFruit: 'apple',
        },

        {
          _id: '63d1b0d1c01cfa32b8d04add',

          index: 1,

          guid: 'df6f76e8-e5cb-407c-83b2-aa8b40d609ae',

          isActive: false,

          balance: '$3,974.78',

          age: 42,

          eyeColor: 'green',

          name: 'Bradford Bauer',

          email: 'bradfordbauer@gonkle.com',

          about:
            'Est duis laborum Lorem ad Lorem laborum labore consequat aute. Aliqua velit in velit sit veniam nisi enim incididunt. Elit ex ex qui ullamco sit sunt labore do elit ullamco. Irure ipsum mollit elit aliquip culpa adipisicing anim cillum cillum laborum sit sunt fugiat. Labore tempor minim duis consequat pariatur et voluptate laborum ex officia ea. Nostrud officia sunt ullamco consequat laboris consequat consequat ex incididunt ex. Minim eiusmod laborum cillum ad.\r\n',

          registered: '2022-06-18T07:45:21 +06:00',

          favoriteFruit: 'strawberry',
        },
        {
          _id: '63d1b0d193a63768e54b6a2e',

          index: 3,

          guid: 'a4ce90a7-df28-46d7-a2b0-af7473855b89',

          isActive: false,

          balance: '$1,753.71',

          age: 47,

          eyeColor: 'blue',

          name: 'Albert Abbott',

          email: 'albertabbott@gonkle.com',

          about:
            'Ad qui laboris duis mollit. Ullamco aliquip cupidatat commodo dolore id elit reprehenderit quis proident. Labore ullamco ut tempor esse.\r\n',

          registered: '2019-06-19T02:52:37 +06:00',

          favoriteFruit: 'strawberry',
        },

        {
          _id: '63d1b0d16f0dfe86f1a0b2a5',

          index: 2,

          guid: 'a1768a42-ec90-43a2-b3e5-abc9d9405ae5',

          isActive: true,

          balance: '$2,747.04',

          age: 55,

          eyeColor: 'blue',

          name: 'Kline Pruitt',

          email: 'klinepruitt@gonkle.com',

          about:
            'Laboris laboris consequat cillum commodo minim laborum. Commodo ad do dolor in do irure. Nulla labore sint voluptate officia amet Lorem nisi aliquip est voluptate irure. Do dolor aliqua magna in eu dolor. Proident mollit officia eu labore dolore ullamco nisi Lorem ad et.\r\n',

          registered: '2017-02-11T07:05:02 +07:00',

          favoriteFruit: 'strawberry',
        },

        {
          _id: '63d1b0d1bf493c874d702756',

          index: 4,

          guid: 'd508feee-42bd-4ed5-8afa-aaeec0c25218',

          isActive: false,

          balance: '$2,187.80',

          age: 40,

          eyeColor: 'blue',

          name: 'Goldie Weber',

          email: 'goldieweber@gonkle.com',

          about:
            'Ex do minim incididunt aliqua. Laborum qui elit officia elit. Dolor eu nostrud voluptate eiusmod dolor. Proident dolore duis nostrud dolore enim excepteur aliqua excepteur et.\r\n',

          registered: '2014-12-30T07:23:22 +07:00',

          favoriteFruit: 'apple',
        },
        {
          _id: '63d1b0d1ef4562ca4aed8835',

          index: 6,

          guid: 'aa9e8755-9e36-4e97-b51a-2bd26ff71628',

          isActive: true,

          balance: '$3,053.13',

          age: 39,

          eyeColor: 'blue',

          name: 'Salas Lopez',

          email: 'salaslopez@gonkle.com',

          about:
            'Dolor dolore aliqua adipisicing id culpa nulla tempor non. Do aliqua eiusmod in labore reprehenderit laboris id consectetur culpa veniam dolore. Sint qui laborum ut aliqua voluptate fugiat ea. Deserunt deserunt est magna eu adipisicing et ipsum anim sunt nulla amet reprehenderit. In excepteur aliquip esse aliquip eu laborum consectetur. Irure ad ullamco ut ut veniam.\r\n',

          registered: '2018-07-27T08:33:24 +06:00',

          favoriteFruit: 'banana',
        },
        {
          _id: '63d1b0d1825af6d43dda2ca5',

          index: 5,

          guid: 'ef6d6632-8c06-4c5f-9ec3-36a062304a32',

          isActive: false,

          balance: '$1,462.15',

          age: 53,

          eyeColor: 'green',

          name: 'Kara Marsh',

          email: 'karamarsh@gonkle.com',

          about:
            'Ipsum exercitation velit est nulla velit nostrud nostrud ex cillum ad proident quis consectetur. Cupidatat ea minim consectetur proident ut. Officia proident consectetur adipisicing dolor adipisicing dolor consequat irure irure exercitation deserunt. Deserunt adipisicing nulla sunt et culpa ex eiusmod.\r\n',

          registered: '2018-06-14T05:16:31 +06:00',

          favoriteFruit: 'banana',
        },

        {
          _id: '63d1b0d1744b8993ba2be6a3',

          index: 8,

          guid: '34ca9db1-5c45-4430-b4e5-25a5f344bd32',

          isActive: true,

          balance: '$3,377.06',

          age: 20,

          eyeColor: 'brown',

          name: 'Bryan Randall',

          email: 'bryanrandall@gonkle.com',

          about:
            'Dolor nostrud aliquip id non ex. Esse labore magna nostrud voluptate labore sit cupidatat pariatur ut duis officia officia dolor. Nostrud reprehenderit ipsum tempor mollit nulla ad dolor deserunt. Occaecat adipisicing amet tempor anim exercitation dolor eu nostrud officia. Ad consequat culpa aliquip nulla elit incididunt elit ea veniam do.\r\n',

          registered: '2017-05-12T10:11:12 +06:00',

          favoriteFruit: 'strawberry',
        },
      ],
    };
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('AboutUs', {aboutus: item});
        }}>
        <View
          style={[
            styles.renderView,
            {backgroundColor: item.isActive == true ? '#4267B2' : 'lightgrey'},
          ]}>
          <Text>Index: {item.index}</Text>
          <View style={styles.nameView}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
          <Text>Email: {item.email}</Text>
          <Text>Balance: {item.balance}</Text>
          <Text numberOfLines={2}>About: {item.about}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  sortListById = () => {
    const Data = this.state.arrData.sort(function (obj1, obj2) {
      return obj1.index - obj2.index;
    });
    this.setState(
      previousState => (
        {arrData: previousState.arrData},
        () => {
        }
      ),
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <Text  style={{fontSize: 40, textAlign:'center'}}> Investor List</Text>
        <Button
          title="Click here to sort Array By Index"
          onPress={() => this.sortListById()}
        />
        <FlatList
          data={this.state.arrData}
          style={{flex: 1, marginHorizontal: 20}}
          renderItem={this.renderItem}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  renderView: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
