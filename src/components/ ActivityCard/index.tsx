import { IoIosArrowRoundUp } from "react-icons/io";

import * as S from "./styles";
import { useTheme } from "styled-components";

export const ActivityCard = () => {
  const { colors } = useTheme();

  const activityLibrary = [
    {
      title: "$2400, Purchase",
      subtitle: "11 JUL 8:10 PM",
    },
    {
      title: "New order #8744152",
      subtitle: "11 JUL 11 PM",
    },
    {
      title: "Affiliate Payout",
      subtitle: "11 JUL 7:64 PM",
    },
    {
      title: "New user added",
      subtitle: "11 JUL 1:21 AM",
    },
    {
      title: "Product added",
      subtitle: "11 JUL 4:50 AM",
    },
  ];

  return (
    <S.ActivityCardWrapper>
      <S.ActivityCardTitleContainer>
        <S.ActivityCardTitle>Activity overview</S.ActivityCardTitle>
        <S.ActivityCardTitleSpan>
          <IoIosArrowRoundUp size={24} color={colors.green[200]} />
          16% this month
        </S.ActivityCardTitleSpan>
      </S.ActivityCardTitleContainer>

      {activityLibrary.map((item) => (
        <S.ActivityCardContentContainer>
          <S.ActivityCardContentSpan />

          <S.ActivityCardContent>
            <S.ActivityCardContentTitle>
              {item.title}
            </S.ActivityCardContentTitle>
            <S.ActivityCardContentSubtitle>
              {item.subtitle}
            </S.ActivityCardContentSubtitle>
          </S.ActivityCardContent>
        </S.ActivityCardContentContainer>
      ))}
    </S.ActivityCardWrapper>
  );
};
