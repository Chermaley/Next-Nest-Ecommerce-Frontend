import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { Consultation, ConsultationStatus } from "../../api/models";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  chatActions,
  getOpenConsultation,
} from "../../store/reducers/chatSlice";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store/store";
import { getUser } from "../../store/reducers/userSlice";
import { getAccessTokenFromCtx } from "../../utils/getAccessFromCtx";
import { Chat } from "../../components/Chat";
import styles from "./Consult.module.scss";
import clsx from "clsx";

const Consult = () => {
  const dispatch = useAppDispatch();
  const user = useTypedSelector((state) => state.user.user);
  const openConsultations = useTypedSelector(
    (state) => state.chat.server.openConsultations
  );
  const closedConsultations = useTypedSelector(
    (state) => state.chat.server.closedConsultations
  );
  const activeConsultation = useTypedSelector(
    (state) => state.chat.client.activeConsultation
  );

  const onCreateNewConversation = () => {
    if (user) {
      dispatch(chatActions.createNewConsultation({ userId: user.id }));
    }
  };

  return (
    <MainLayout title="Консультация косметолога">
      <div>
        <h1>Консультации</h1>
        <div>
          {user &&
            (!activeConsultation ? (
              <div>
                {openConsultations?.map((consultation) => (
                  <ConsultationItem
                    key={consultation.id}
                    consultation={consultation}
                  />
                ))}
                {openConsultations.length === 0 && (
                  <button onClick={onCreateNewConversation}>
                    Создать обращение
                  </button>
                )}
                <div>Истории консультаций</div>
                <div>
                  {closedConsultations?.map((consultation) => (
                    <div key={consultation.id}>{consultation.updatedAt}</div>
                  ))}
                </div>
              </div>
            ) : (
              <Chat />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Consult;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const accessToken = getAccessTokenFromCtx(ctx);
    if (accessToken) {
      await store.dispatch(getUser({ accessToken }));
      await store.dispatch(getOpenConsultation({ accessToken }));
      // await store.dispatch(getClosedConsultations({ accessToken }));
    }
    return { props: {} };
  });

const ConsultationItem: React.FC<{
  consultation: Consultation;
}> = ({ consultation }) => {
  const dispatch = useAppDispatch();
  const user = useTypedSelector((state) => state.user.user);
  const creator = consultation.creator;
  const onClick = () => {
    if (user) {
      dispatch(chatActions.joinConsultation({ consultation, userId: user.id }));
    }
  };
  return (
    <div
      className={clsx(styles.consultation, {
        [styles.active]: consultation.status === ConsultationStatus.Open,
      })}
      onClick={onClick}
    >
      Консультация у косметолога
    </div>
  );
};
