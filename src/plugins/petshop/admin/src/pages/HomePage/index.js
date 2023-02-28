/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout'
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Illo } from "../../components/Illo";
import OwnerModal from '../../components/OwnerModal';
import OwnerCount from '../../components/OwnerCount';
import OwnerTable from '../../components/OwnerTable';
import petshopRequests from '../../api/petshop';

const HomePage = () => {
  const [ ownerData, setOwnerData ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);

  const fetchData = async () => {
    if (isLoading === false ) setIsLoading(true);
    const owner = await petshopRequests.getAllOwner();
    setOwnerData(owner);
    setIsLoading(false);
    console.log(owner);
  }

  useEffect(async () => {
    await fetchData();
  },[])

  async function addOwner(data) {
    await petshopRequests.addOwner(data);
    await fetchData();
    // setOwnerData([...ownerData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function deleteOwner(data) {
    await petshopRequests.deleteOwner(data.id);
    await fetchData();
  }

  async function editOwner(id, data) {
    await petshopRequests.editOwner(id, data);
    await fetchData();
    // alert("Add Edit Owner in API");
  }

  if (isLoading) return <LoadingIndicatorPage />

  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Petshop Plugin"
          subtitle="All you petshop in one place"
          as="h2"
        />

        <ContentLayout>
          { ownerData.length === 0 ? (
              <EmptyStateLayout
                icon={<Illo />}
                content="You don't have any owner yet..."
                action={
                  <Button
                    onClick={() => setShowModal(true)}
                    variant="secondary"
                    startIcon={<Plus />}
                  >
                    Add Owner
                  </Button>
                }
              />
            ) : (
              <>
                <OwnerCount count={ownerData.length}/>
                <OwnerTable
                  ownerData = {ownerData}
                  setShowModal = {setShowModal}
                  deleteOwner={deleteOwner}
                  editOwner={editOwner}
                />
              </>
            )
          }
        </ContentLayout>
        {showModal && <OwnerModal setShowModal={setShowModal} addOwner={addOwner} />}
      </Layout>
    </div>
  );
};

export default HomePage;
