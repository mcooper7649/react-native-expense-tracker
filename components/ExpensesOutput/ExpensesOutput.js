import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-12-19'),
  },
  {
    id: 'e2',
    title: 'a pair of trousers',
    amount: 89.29,
    date: new Date('2022-12-21'),
  },
  {
    id: 'e3',
    title: 'Some Bananas',
    amount: 5.99,
    date: new Date('2022-01-06'),
  },
  { id: 'e4', title: 'A Book', amount: 14.99, date: new Date('2022-02-19') },
  {
    id: 'e5',
    title: 'Another Book',
    amount: 19.99,
    date: new Date('2022-02-18'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
