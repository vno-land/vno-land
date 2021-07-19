import { FC, useState } from 'react';

export interface RouteData {
  title: string;
  path?: string;
  routes?: RouteData[];
}

interface NestedRouteData extends RouteData {
  routes: RouteData[];
}

interface SideBarItemProps {
  route: RouteData;
}

const SideBarItem: FC<SideBarItemProps> = ({ route }) => {
  return (
    <a href={route.path}>
      <div>{route.title}</div>
    </a>
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

  return (
    <div style={{ padding: '1rem' }}>
      <p style={{ margin: 0 }} onClick={() => setOpen(!open)}>
        {route.title}
      </p>
      {open && (
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '1rem' }}></div>
          <div>
            {route.routes.map((route, i) => {
              if (route.routes) {
                return <SideBarList key={i} route={route as NestedRouteData} />;
              }
              return <SideBarItem key={i} route={route} />;
            })}
          </div>
        </div>
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
