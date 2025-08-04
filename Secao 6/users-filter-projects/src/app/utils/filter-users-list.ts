import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersListByName = (name: string, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;
  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  return usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
};

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const START_DATE_NOT_TYPPED = startDate === undefined || endDate === undefined;
  if (START_DATE_NOT_TYPPED) {
    return usersList;
  }

  return usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate }));
};

const filterUsersListByStatus = (status: Boolean | undefined, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_TYPPED = status === undefined;
  if (STATUS_NOT_TYPPED) {
    return usersList;
  }

  return usersList.filter((user) => user.ativo == status);
};

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  return filteredList;
};

export { filterUsersList };
