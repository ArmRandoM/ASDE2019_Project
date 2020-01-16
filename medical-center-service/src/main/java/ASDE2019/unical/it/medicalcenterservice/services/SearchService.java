package ASDE2019.unical.it.medicalcenterservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserDAO;

@Service
public class SearchService
{
	@Autowired
	private UserDAO userDAO;

	public List<User> findUsersByValue(String value)
	{
		return userDAO.findUsersByValue(value);
	}
}
