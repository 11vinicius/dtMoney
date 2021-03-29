import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'freelancce de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2921-02-12 9:18:00'),       
         },
        {
          id: 2,
          title: 'aluguel',
          type: 'withdrow',
          category: 'dev',
          amount: 600,
          createdAt: new Date('2921-02-12 9:08:00'),
        }
      ],
    })
  },


  routes(){
    this.namespace = 'api';

    this.get('/transactions',()=>{
      return this.schema.all('transaction');
    });

    this.post('/transactions',(scheme, request)=>{
      const data = JSON.parse(request.requestBody);
      return scheme.create('transaction', data);
    })

  }
})




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
