import { FaCheck } from "react-icons/fa6";

import * as S from "./styles";
import { formattedPrice } from "../../utils/formatter";
import { useTheme } from "styled-components";

const EnterpriseClientsLibrary = [
  {
    nameCompany: "Addidas Sportwear",
    contacts: ["SP", "PP", "MM"],
    order: 1400,
    completion: 60,
  },
  {
    nameCompany: "Netflix Platforms",
    contacts: ["SP", "MM"],
    order: 30000,
    completion: 25,
  },
  {
    nameCompany: "Shopifi Stores",
    contacts: ["PP", "TP"],
    order: 8500,
    completion: 100,
  },
  {
    nameCompany: "Boostrap Technologies",
    contacts: ["SP", "PP", "MM", "TP"],
    order: 20500,
    completion: 100,
  },
  {
    nameCompany: "Community First",
    contacts: ["MM"],
    order: 9800,
    completion: 75,
  },
];

export const EnterpriseClientsCard = () => {
  const { colors } = useTheme();

  return (
    <S.EnterpriseClientsWrapper>
      <S.EnterpriseClientsHeader>
        <S.EnterpriseClientsHeaderTitle>
          Enterprise Clients
        </S.EnterpriseClientsHeaderTitle>

        <S.EnterpriseClientsHeaderSubtitleWrapper>
          <FaCheck size={18} color={colors.blue[400]} />

          <S.EnterpriseClientsHeaderSubtitle>
            15 New Acquired ths month
          </S.EnterpriseClientsHeaderSubtitle>
        </S.EnterpriseClientsHeaderSubtitleWrapper>
      </S.EnterpriseClientsHeader>

      <S.Table>
        <thead>
          <tr>
            <th>COMPANIES</th>
            <th>CONTACTS</th>
            <th>ORDER</th>
            <th>COMPLETION</th>
          </tr>
        </thead>

        <S.TBody>
          {EnterpriseClientsLibrary.map((client) => (
            <tr key={client.nameCompany}>
              <td>{client.nameCompany}</td>

              <S.ContactContainer>
                {client.contacts.map((contact, index) => (
                  <S.Contact key={index}>{contact}</S.Contact>
                ))}
              </S.ContactContainer>

              <td>{formattedPrice.format(client.order)}</td>

              <td>
                {client.completion}%{" "}
                <S.Completion percentage={client.completion}></S.Completion>
              </td>
            </tr>
          ))}
        </S.TBody>
      </S.Table>
    </S.EnterpriseClientsWrapper>
  );
};
