O componente **ScTable** é um extend do componente [b-table](https://buefy.github.io/#/documentation/table).

```jsx

    const data = [
      { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
      { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
      { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
      { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
      { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
    ];

    const columns = [
      {
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true
      },
      {
        field: 'first_name',
        label: 'Primeiro Nome',
      },
      {
        field: 'last_name',
        label: 'Sobrenome',
      },
      {
        field: 'date',
        label: 'Data',
        centered: true
      },
      {
        field: 'gender',
        label: 'Genero',
      }
    ];

    <sc-table :data="data" :columns="columns"></sc-table>

```
