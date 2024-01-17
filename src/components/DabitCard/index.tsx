import { Button } from "../Button";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { CardIcon } from "../../assets/svg/CardIcon";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const DebitCard = () => {
  const theme = useTheme();

  return (
    <S.DebitCardWrapper>
      <S.CardContainer>
        <S.CardContent>
          <S.CardItems>
            <div>
              <p>VISA</p>
              <p>PREMIUM ACCOUNT</p>
            </div>

            <CardIcon />
          </S.CardItems>

          <S.CardNumber>
            <p>5789 </p>
            <p>**** </p>
            <p>**** </p>
            <p>2847</p>
          </S.CardNumber>

          <S.CardItems>
            <div>
              <p>Card holder</p>
              <p>Mike Smith</p>
            </div>

            <div>
              <p>Expire date</p>
              <p>06/21</p>
            </div>
          </S.CardItems>
        </S.CardContent>
      </S.CardContainer>

      <S.DataContainer>
        <S.DataContent>
          <S.TotalProductsAndOrder>
            <S.IconContent>
              <FaBagShopping color={theme.colors.blue[500]} size={26} />
            </S.IconContent>

            <div>
              <S.TotalProductsAndOrderTitle>1153</S.TotalProductsAndOrderTitle>
              <S.TotalProductsAndOrderSubTitle>
                Products
              </S.TotalProductsAndOrderSubTitle>
            </div>
          </S.TotalProductsAndOrder>

          <S.TotalProductsAndOrder>
            <S.IconContent>
              <FaCartShopping color={theme.colors.green[100]} size={26} />
            </S.IconContent>

            <div>
              <S.TotalProductsAndOrderTitle>81K</S.TotalProductsAndOrderTitle>
              <S.TotalProductsAndOrderSubTitle>
                Order Served
              </S.TotalProductsAndOrderSubTitle>
            </div>
          </S.TotalProductsAndOrder>
        </S.DataContent>

        <S.DataContent>
          <div>
            <S.TotalValueTitle>$405,012,300</S.TotalValueTitle>
            <S.TotalValueSubtitle>Life time sales</S.TotalValueSubtitle>
          </div>

          <S.TotalValueTag>
            <S.TotalValueTagText>YoY 24%</S.TotalValueTagText>
          </S.TotalValueTag>
        </S.DataContent>

        <S.DataContent>
          <Button styleType="blue">View Project</Button>

          <Button styleType="blueLight">Analytics</Button>
        </S.DataContent>
      </S.DataContainer>
    </S.DebitCardWrapper>
  );
};
