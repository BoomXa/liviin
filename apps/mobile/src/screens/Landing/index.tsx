import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { RouteNavigators } from '../../navigation/routes';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Button, Text, FAB, Menu, Divider } from 'react-native-paper';

// Utils
import i18n from '../../i18n';
import { LANGS } from '../../utils';
import { theme } from '../../theme';
import { Icons } from '../../assets';
import { BackgroundLayout } from '../../layouts';

export const Landing = ({ navigation }) => {
  // const { t } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(LANGS[0].name);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onLangChange = (lang) => () => {
    setCurrentLanguage(lang.name);
    i18n.changeLanguage(lang.code);
    closeMenu();
  };

  const navigateToOnBoarding = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    return () => {
      // Reset status bar style when screen loses focus
      StatusBar.setBarStyle('dark-content', true);
    };
  });

  return (
    <BackgroundLayout>
      <View>
        <Icons.LiviinLogo />
        {/* <Text style={{color: 'white'}}>{t('welcome')}</Text> */}
        <View style={styles.menuContainer}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button
                mode="contained"
                onPress={openMenu}
                color={theme.colors.background}
              >
                <View style={styles.buttonContainer}>
                  <Text style={styles.marginRight}>{currentLanguage}</Text>
                  <Icons.ArrowDownSmall />
                </View>
              </Button>
            }
          >
            {LANGS.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <Menu.Item onPress={onLangChange(lang)} title={lang.name} />
                {index < LANGS.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Menu>
        </View>
        <FAB
          style={styles.fab}
          icon={Icons.RightArrow}
          onPress={navigateToOnBoarding}
        />
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 10,
  },
  fab: {
    margin: 16,
    right: -60,
    bottom: -280,
    position: 'absolute',
    backgroundColor: theme.colors.background,
  },
});
