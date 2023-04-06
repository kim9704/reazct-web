import Store from './screens/index'
import language from './Global/language'
import { UserProvider, UserConsumer } from './Global/UserContext'

function App() {
  const lang = language
  console.log(lang)
  return (
    <UserProvider value={lang}>
      <Store />
    </UserProvider>
  );
}

export default App;
