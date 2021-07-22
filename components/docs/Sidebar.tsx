import { FC, useState } from 'react';
import { useRouter } from 'next/router'

import styles from '../../styles/Sidebar.module.css';

export interface RouteData {
  title: string;
  path?: any;
  routes?: RouteData[];
}

interface NestedRouteData extends RouteData {
  routes: RouteData[];
}

interface SideBarItemProps {
  route: RouteData;
}

const SideBarItem: FC<SideBarItemProps> = ({ route }) => {
  const router = useRouter();
  const handleClick = (e:any) => {
    e.preventDefault();
    router.push(route.path);
  }

  return (
    <li><a href={route.path} onClick={handleClick}>
      <style jsx>{`
        a {
          color: ${router.asPath === route.path ? '#57D3AF' : 'black'};
        }
      `}</style>
      {route.title}
    </a></li>
  );
};

interface SideBarListProps {
  route: NestedRouteData;
  defaultOpen?: boolean;
}

const SideBarList: FC<SideBarListProps> = ({ route, defaultOpen }) => {
  const [open, setOpen] = useState(
    defaultOpen !== undefined ? defaultOpen : true
  );

  const sidebarClickHandler = (e:any) => {
    e.target.classList.toggle('closed')
    setOpen(!open);
  }

  return (
    <div className={styles.listContainer} style={{ padding: '1rem 0' }}>
      <style jsx>{`
        .closed {
          color: #000;
        }
        .closed i {
          transform: rotate(0deg);
          color: #000;
        }
      `}</style>
      <h3 className={styles.listHeading} style={{ margin: '20px 0 0 0' }} onClick={sidebarClickHandler}><i className="fas fa-chevron-right"></i> {route.title}
      </h3>
      {open && (
          <ul className={styles.sidebarList}>
            {route.routes.map((route, i) => {
              if (route.routes) {
                return <SideBarList key={i} route={route as NestedRouteData} />;
              }
              return <SideBarItem key={i} route={route} />;
            })}
          </ul>
      )}
    </div>
  );
};

interface SideBarProps {
  routes: RouteData[];
}

const SideBar: FC<SideBarProps> = ({ routes }) => {
  return (
    <div>
      {routes.map((route, i) => {
        if (route.routes) {
          return <SideBarList key={i} route={route as NestedRouteData} />;
        }
        return <SideBarItem key={i} route={route} />;
      })}
    </div>
  );
};

export default SideBar;
