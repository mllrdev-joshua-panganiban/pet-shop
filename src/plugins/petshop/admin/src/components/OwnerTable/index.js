import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";
import { TextInput } from "@strapi/design-system/TextInput";
import PetModal from "../PetModal"
import Pencil from "@strapi/icons/Pencil";
import Trash from "@strapi/icons/Trash";
import Plus from "@strapi/icons/Plus";

function OwnerInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="owner-input"
      name="owner-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function OwnerTable({
  ownerData,
  deleteOwner,
  editOwner,
  setShowModal,
}) {

  async function addPet(data){
    //Add Code here
  }

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowModal(true)} icon={<Plus />}>
            Add a owner
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Owner</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Pets</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {ownerData.map((owner) => {
            const [inputValue, setInputValue] = useState(owner.name);

            const [isEdit, setIsEdit] = useState(false);
            const [ showPetModal, setShowPetModal ] = useState(false);

            return (
              <Tr key={owner.id}>
                <Td>
                  {isEdit ? (
                    <OwnerInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{owner.name}</Typography>
                  )}
                </Td>

                <Td>
                    <Typography textColor="neutral800">
                        <div>
                          { owner.hasPet ?
                            owner.pets.map((pet) => {
                                return(
                                    <div key={pet.id}>
                                        <div>{pet.name}</div>
                                    </div>
                                )
                            }) :
                            <Box>
                              <Button
                                onClick={() => setShowPetModal(true)}
                                variant="secondary"
                                startIcon={<Plus />}
                              >
                                Add Pet
                              </Button>
                            </Box>
                          }
                        </div>
                    </Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editOwner(owner.id, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <IconButton
                        onClick={() => setIsEdit(true)}
                        label="Edit"
                        noBorder
                        icon={<Pencil />}
                      />

                      <Box paddingLeft={1}>
                        <IconButton
                          onClick={() => deleteOwner(owner)}
                          label="Delete"
                          noBorder
                          icon={<Trash />}
                        />
                      </Box>
                      {showPetModal && <PetModal setShowPetModal={setShowPetModal} addPet={addPet}/>}
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
