import React, { useCallback, useEffect } from 'react';
import {
  loadQuery, useQueryLoader
} from 'react-relay/hooks';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Menu from './Components/Menu';
import environment from './createRelayEnvironment';
import ErrorPage from './ErrorPage';
import IssuesPage from './IssuesPage';
import NewIssuePage from './NewIssuePage';
import { OwnerQuery } from './OwnerQuery';
import { RepositoryIssuesQuery } from './RepositoryIssuesQuery';
import { RepositoryQuery } from './RepositoryQuery';

const { Suspense } = React;
const repoName = "typescript-tryout-1";
const ownerName = "manyu007vit";

export const preloadedQueryRepo = loadQuery(environment, OwnerQuery, {
  login: ownerName
});

export const preloadedQueryRepoName = loadQuery(environment, RepositoryQuery, {
  owner: ownerName, name: repoName
});

const preloadedQuery = loadQuery(environment, RepositoryIssuesQuery, {
  owner: ownerName, repo: repoName, labels: null
}, { fetchPolicy: "store-and-network" });

function App() {

  const [queryRef, loadQuery] = useQueryLoader(RepositoryIssuesQuery, preloadedQuery)

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const refresh = useCallback((labels) => {
    // Load the query again using the same original variables.
    // Calling loadQuery will update the value of queryRef.
    // The fetchPolicy ensures we always fetch from the server and skip
    // the local data cache.
    const { variables } = preloadedQuery;
    loadQuery({...variables, labels: labels || null});
  }, [loadQuery]);

  const darkOrLight = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      delete localStorage.theme;
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }
  }

  const AddIcon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
  )

  const RepositoryIcon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  )

  return (
    <Suspense fallback={'Loading...'}>
      <Router>
        <div className="flex align-middle sm:px-2 md:px-16 flex-col h-screen w-auto dark:bg-black bg-gray-300 overflow-y-scroll ">
          <div className="text-xl mt-10 ml-5 dark:text-white inline-flex">
            <span className="mt-1"><RepositoryIcon /></span>
            <span className="ml-2 text-blue-600 dark:text-blue-600">{`${ownerName}/${repoName}`}</span>
          </div>
          <header className="sm:container pb-1 flex w-full flex-row px-2 pt-10 space-x-2">
            <Link to="/"><Menu label="Issues" /></Link>
            <Link to="/new"><Menu icon={<AddIcon />} /></Link>
            <div className="flex-grow flex justify-end dark:text-white text-black">
              <div>Theme</div>
              <span onClick={darkOrLight} className="cursor-pointer ml-3 w-6 h-6 rounded-full dark:bg-white bg-gray-800 object-cover inline relative z-30 text-xl shadow-2xl dark:border-gray-300 border-gray-500 border-4" ></span>
            </div>
          </header>
          <div className="sm:container">
            <Switch>
              <Route path="/" exact render={
                (props) => <IssuesPage
                  {...props}
                  repoName={repoName}
                  ownerName={ownerName}
                  preloadedQuery={queryRef}
                  refresh={refresh}
                />
              }
              />
              <Route path="/new" component={NewIssuePage} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
