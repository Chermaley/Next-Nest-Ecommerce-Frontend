import React from "react";
import { chatActions, getOpenConsultation } from "../../store/reducers/chatSlice";
import { ConsultationType } from "../../api/models";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store/store";
import { getAccessTokenFromCtx } from "../../utils/getAccessFromCtx";
import { getUser } from "../../store/reducers/userSlice";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Index = () => {
  const dispatch = useAppDispatch();
  const openConsultations = useTypedSelector(
    (state) => state.chat.server.openConsultations
  );

  const user = useTypedSelector((state) => state.user.user);

  const onCreateNewConsultation = () => {
    if (user) {
      dispatch(
        chatActions.createNewConsultation({
          userId: user.id,
          type: ConsultationType.Cosmetic,
        })
      );
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const accessToken = getAccessTokenFromCtx(ctx);
    if (accessToken) {
      await store.dispatch(getUser({ accessToken }));
      // await store.dispatch(getOpenConsultation( ));
      // await store.dispatch(getClosedConsultations({ accessToken }));
    }
    return { props: {} };
  });
