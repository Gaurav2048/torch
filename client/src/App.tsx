import "./App.css";
import PrimaryNavigation from "./components/PrimaryNavigation";
import ErrorBoundary from "./ErrorBoundary";
import useInitials from "./hooks/useInitials";
import useSocket from "./hooks/useSocket";
import React, { useEffect } from "react";
import AppRouter from "./router";
import { SOCKET_EVENT_TYPE } from "./Constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { memberAtom, orgAtom, profileAtom } from "./AppState/state";
import { produce } from "immer";

export const SocketContext = React.createContext({});

function App() {
  const loading = useInitials();
  const useSocketValues = useSocket()
  const org = useRecoilValue(orgAtom)
  const profile = useRecoilValue(profileAtom)
  const [ members, setMember ] = useRecoilState(memberAtom)

  useEffect(() => {
    if (!org || !profile) return
    useSocketValues.emitEvent(SOCKET_EVENT_TYPE.JOIN_ORGANISATION, { available: true, organisationId: org._id, user:  profile._id})
    return () => useSocketValues.emitEvent(SOCKET_EVENT_TYPE.REGISTER_AVAILABILITY, { available: false })
  }, [org, profile])

  useEffect(() => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1bmphbmthbGl0YTgzNkBnbWFpbC5jb20iLCJpYXQiOjE3MjcxNzE5MTh9.7kOqNjX89A1Oeaf-yUsLAooVEi02dOFrgIFThKB1cv0")
  }, [])

  useEffect(() => {
    useSocketValues.listenEvent(SOCKET_EVENT_TYPE.UPDATE_ORGANISATION_AVAILABILITY, (data: any) => {
      const { userId, available } = data
      setMember(produce(members, draft => {
        return draft.map(member => {
          if (member._id === userId) {
            member.online = available
          }
          return member
        })
      }))
    })
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <SocketContext.Provider value={{ ...useSocketValues }}>
      <ErrorBoundary>
        <PrimaryNavigation>
          <AppRouter />
        </PrimaryNavigation>
      </ErrorBoundary>
    </SocketContext.Provider>
  );
}

export default App;
