import { Route, Routes } from 'react-router-dom';

import {DashBoardPage, PageNotFound, LoginPage} from './pages'
import { AllProducts } from 'components/panels';
import AddProductPanel from 'components/panels/AddProductPanel';
import EditProductsPanel from 'components/panels/EditProductsPanel'

function App() {

  return (
        <>
          <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="dashboard" element={<DashBoardPage/>}>
              <Route index element={<AllProducts title="All Products"/>}/>
              <Route path='add' element={<AddProductPanel title="Add new Products"/>}/>
              <Route path='edit' element={<EditProductsPanel title="Edit Product"/>}/>    
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </>
  );
}

export default App;
